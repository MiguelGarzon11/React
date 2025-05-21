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

