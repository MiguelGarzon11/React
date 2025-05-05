import './App.css';
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handSudmit = async (e) => {
    e.preventDefault();

  const response = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, pwd})
  });

  const data = await response.json();
  console.log("Respuesta del backend:", data);
};

  return (
    <div className="App">
      <div className="contenedor-login">
        <img src="/imagen.png" alt="Logo" className="imagen"/>
        <h1 className='encabezado'>Login</h1>
      </div>
      <form onSubmit={handSudmit}>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required></input>
        <label for="pwd">Password</label>
        <input type="password" id="pwd" name="pwd" required></input>

        <button type="submit">Sing in</button>
      </form>
    </div>
  );
}

export default App;
