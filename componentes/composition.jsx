// Es la práctica de construir componentes más complejos combinando componentes más pequeños y simples.
// En lugar de heredar de una clase (como en la POO tradicional), React prefiere la composición como método para 
// reutilizar código y dividir responsabilidades.

function Header() {
  return <header>Encabezado</header>;
}

function Content() {
  return <main>Contenido principal</main>;
}

function Footer() {
  return <footer>Pie de página</footer>;
}

// Se pueden poner en un solo componente más grande.
function Page() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// ¿Por qué es tan importante?

// Reutilización de código: Componentes pequeños pueden usarse muchas veces.
// Separación de responsabilidades: Cada componente hace una sola cosa.
// Escalabilidad: Puedes construir interfaces grandes a partir de pequeñas piezas reutilizables.
// Legibilidad y mantenimiento: El código es más limpio, fácil de entender y de modificar.

// Imagina que estás construyendo una página web con una tarjeta de usuario.
// Esa tarjeta podría estar compuesta por:
// Una imagen de avatar,
// Un nombre,
// Una descripción.
// Cada una de esas partes puede ser un componente por separado.

// Luego juntas esos componentes dentro de otro llamado TarjetaUsuario. Eso es composición.

function Avatar() {
  return <img src="avatar.png" />;
}

function Nombre() {
  return <h2>Miguel Ángel</h2>;
}

function Descripcion() {
  return <p>Desarrollador Frontend</p>;
}

function TarjetaUsuario() {
  return (
    <div>
      <Avatar />
      <Nombre />
      <Descripcion />
    </div>
  );
}
