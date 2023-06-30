/**
 * Cria uma Counter APP cujo componente modifique um estado
 * e aplique o seu estado ao Titulo do projeto
 *
 * Dicas:
 * - Armazenem o counter num estado useState
 * - Não se esqueçam de importar o useState do React
 * - Modifiquem estado com eventos ex: onClick
 * - Sempre que modificar o contador o titulo da página deve apresentar o valor correspondente
 */

import { useState } from "react";

export default function Counter() {
  const [numBooks, setNumBooks] = useState(100);

  const bookWord = numBooks === 1 ? "livro" : "livros";

  document.title = `A minha biblioteca tem ${numBooks}`;

  function addBooks() {
    setNumBooks(numBooks + 1);
  }

  function subBooks() {
    setNumBooks(numBooks - 1);
  }

  return (
    <div>
      <h3>Temos disponíveis {numBooks}</h3>
      <button onClick={subBooks}>Retire livros</button>
      <button onClick={addBooks}>Adicione Livros</button>
    </div>
  );
}
