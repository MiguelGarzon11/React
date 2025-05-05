import './App.css';

function App() {

  const handSudmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado")
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
