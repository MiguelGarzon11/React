from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # Esto permite que React (otro origen) se conecte con el backend.

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    pwd = data.get('pwd')

    if email == "miguel@example.com" and pwd == "1234":
        return jsonify({"message": "Login exitoso", "user": email}), 200
    else:
        return jsonify({"message": "Credenciales inválidas"}), 401
    
if __name__ == '__main__':
    app.run(debug=True, port=8000) 
