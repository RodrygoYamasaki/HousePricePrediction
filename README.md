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
   https://github.com/RodrygoYamasaki/HousePricePrediction.git
   ```

2. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Acesse o notebook:**

   ```bash
   notebooks/treinando_modelo.ipynb
   ```
