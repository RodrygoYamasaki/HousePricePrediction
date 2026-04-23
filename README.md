# 🏠 House Price Prediction
Este projeto visa desenvolver um modelo de Machine Learning capaz de prever o valor de mercado de propriedades residencias com base em caracteristicas estruturais e geograficas. O objetivo principal é fornecer uma ferramenta de estimatica precisa para auxiliar compradores e corretores na tomada de decisão, reduzindo a assimetria de informação no mercado.

## 🛠️ Tecnologias e Bibliotecas

- **Python:** Linguagem de programação principal para desenvolvimento do projeto.
- **Jupyter Notebook:** Ambiente para desenvolvimento interativo e documentação do código.
- **Pandas:** Para manipulação e análise de dados.
- **Matplotlib:** Para criação de visualizações estatísticas.
- **Seaborn:** Para gráficos e visualizações personalizadas.
- **Scikit-Learn:** Biblioteca para criação e treino de modelos de machine learning.

---

## 📊 Dataset

| Coluna | Descrição |
|---|---|
| `area_m2` | Área do imóvel em m² |
| `quartos` | Número de quartos |
| `banheiros` | Número de banheiros |
| `vagas` | Vagas de garagem |
| `bairro` | Bairro do imóvel |
| `idade_anos` | Idade do imóvel em anos |
| `piscina` | Presença de piscina (0 ou 1) |
| `preco` | Preço do imóvel em R$ (target) |

---

## 🔍 Análise Exploratória (EDA)
As seguintes análises foram realizadas:

- Visualização das primeiras linhas e estatísticas descritivas.
- Verificação de valores nulos e duplicatas.
- Distribuição do preço (histograma + KDE).
- Distribuição do preço (boxplot).
- Matriz de correlação entre as variáveis.
- Dispersão Área x Preço por Bairro.
- Preço médio por bairro.

---

## 🤖 Modelos Treinados
Foram treinados e comparados 4 modelos de regressão:

| Modelo | R² Treino | R² Teste |
|---|---|---|
| Linear Regression | 0.8591 | 0.8692 |
| Ridge Regression | 0.8576 | 0.8663 |
| Random Forest | 0.9721 | 0.8246 |
| Gradient Boosting | 0.9928 | 0.9246 |

---

## 📈 Métricas do Melhor Modelo
Gradient Boosting:

| Métrica | Valor |
|---|---|
| R² | 0.9246 |
| MAE | R$ 86.536 |
| RMSE | R$ 106.201 |

---

## 🚀 Como usar:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/RodrygoYamasaki/HousePricePrediction.git
   cd HousePricePrediction
   ```

2. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Treine o modelo:**

   ```bash
   jupyter notebook notebooks/treinando_modelo.ipynb
   ```

4. **Inicie o servidor backend:**

   ```bash
   cd backend
   run.bat
   ```

5. **Abra o arquivo index.html com a extensão Live Server no VSCode.**

6. **Preencher o formulário.**

7. **O arquivo Javascript gerencia a interação com a API, enviando os dados do formulário e exibindo o resultado.**
