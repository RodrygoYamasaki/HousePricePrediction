let piscina = false;

function togglePiscina() {
    piscina = !piscina;
    document.getElementById("checkBox").className = "check-box" + (piscina ? " on" : "");
    updateStats();
}

function formatBRL(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

function animarContagem(finalValue, duration = 1400) {
    const el = document.getElementById("result");
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = formatBRL(Math.round(progress * finalValue));
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            el.textContent = formatBRL(finalValue);
        }
    }

    requestAnimationFrame(step);
}

function updateStats() {
    const area      = document.getElementById("area").value;
    const quartos   = document.getElementById("quartos").value;
    const banheiros = document.getElementById("banheiros").value;
    const vagas     = document.getElementById("vagas").value;
    const bairro    = document.getElementById("bairro").value;
    const idade     = document.getElementById("idade").value;

    const set = (id, text, hasValue) => {
        const el = document.getElementById(id);
        el.textContent = hasValue ? text : "—";
        el.className = "stat-val" + (hasValue ? "" : " empty");
    };

    set("sArea",      area + " m²", !!area);
    set("sQuartos",   quartos,      !!quartos);
    set("sBanheiros", banheiros,    !!banheiros);
    set("sVagas",     vagas,        !!vagas);
    set("sBairro",    bairro,       !!bairro);
    set("sIdade",     idade + " anos", !!idade);

    const sPiscina = document.getElementById("sPiscina");
    sPiscina.textContent = piscina ? "Sim" : "Não";
    sPiscina.className = "stat-val";
}

["area", "idade", "quartos", "banheiros", "vagas", "bairro"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateStats);
});

document.getElementById("houseForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const area      = parseFloat(document.getElementById("area").value);
    const quartos   = parseInt(document.getElementById("quartos").value);
    const banheiros = parseInt(document.getElementById("banheiros").value);
    const vagas     = parseInt(document.getElementById("vagas").value);
    const bairro    = document.getElementById("bairro").value;
    const idade     = parseInt(document.getElementById("idade").value);

    updateStats();

    document.getElementById("result").textContent      = "Calculando...";
    document.getElementById("result-hint").textContent = "";

    const dados = {
        area_m2:    area,
        quartos:    quartos,
        banheiros:  banheiros,
        vagas:      vagas,
        bairro:     bairro,
        idade_anos: idade,
        piscina:    piscina ? 1 : 0,
    };

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    })
        .then((r) => r.json())
        .then((data) => {
            if (data.error) {
                document.getElementById("result").textContent      = "Erro";
                document.getElementById("result-hint").textContent = data.error;
            } else {
                const preco = data.preco_estimado ?? data.prediction ?? Object.values(data)[0];
                animarContagem(preco);
                document.getElementById("result-hint").textContent = "previsão do modelo";
            }
        })
        .catch(() => {
            document.getElementById("result").textContent      = "Erro";
            document.getElementById("result-hint").textContent = "Falha na conexão com o servidor";
        });
});