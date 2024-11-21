from flask import Flask, jsonify 
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/generate_password', methods=['GET'])
def generate_password():
    password = ''.join(random.choices(string.digits, k=6))
    return jsonify({'password': password})

if __name__ == '__main__':
    app.run(debug=True)
