from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

modelo = joblib.load('../modelo_treinado.pkl')
encoder = joblib.load('../encoder_bairro.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        bairro_str = data['bairro']
        data['bairro'] = encoder.transform([bairro_str])[0]

        df = pd.DataFrame([data])

        pred = modelo.predict(df)[0]

        return jsonify({'preco_estimado': round(float(pred), 2)})

    except Exception as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)