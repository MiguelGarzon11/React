from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from email_validator import validate_email, EmailNotValidError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///usuarios.db'
db = SQLAlchemy(app)


class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120),unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    try:
        validate_email(email)
    except EmailNotValidError:
        return  jsonify({"error": "Correo no válido"}), 400
    
    if Usuario.query.filter_by(email=email).first():
        return jsonify({"error": "El correo ya está registrado"}),409
    
    if not password or len(password) < 8:
        return jsonify({"error": "Contraseña muy corta"}), 400
    
    nuevo_usuario = Usuario(email=email, password=password)
    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({"mensaje": "Usuario registrado correctamente"}),201

    
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)