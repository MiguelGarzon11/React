// Para mostrar múltiples elementos, usamos .map() sobre un array y React necesita una key 
// para cada elemento, que lo identifique de forma única.

// Ejemplo:

const frutas = ['Manzana', 'Banano', 'Pera'];

function ListaFrutas() {
    return (
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>{fruta}</li>
            ))}
        </ul>
    );
}

// La key ayuda a React a saber qué elementos cambiaron, se agregaron o eliminaron.


// Mejor manera de hacerlo 

const frutas1 = [
  { id: 1, nombre: 'Manzana' },
  { id: 2, nombre: 'Banano' },
  { id: 3, nombre: 'Pera' }
];

function ListaFrutas() {
  return (
    <ul>
      {frutas.map((fruta) => (
        <li key={fruta.id}>{fruta.nombre}</li>
      ))}
    </ul>
  );
}
