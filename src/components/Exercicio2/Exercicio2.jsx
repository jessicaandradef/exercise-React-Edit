/**
 *
 * Learn Todo List App useState
 * Cria uma aplicação que receba uma lista de coisas a aprenderº
 *
 * Desta lista criem uma botão que permita alterar o estado de esse elemento
 * - A lista é um estado
 * - Para remover ou adicionar elementos devemos modificar o estado
 */

const initialTodos = [
  {
    id: "a",
    task: "Learn React",
    complete: true
  },
  {
    id: "b",
    task: "Learn NodeJS",
    complete: true
  },
  {
    id: "c",
    task: "Learn MongoDB",
    complete: false
  }
];

const elementoAdicionar = {
  id: "d",
  task: "Master JS",
  complete: false
};

export default function ToDoList() {
  const itens = initialTodos;

  return (
    <div class="learn-list">
      <div class="title">My Roadmap</div>
      <p>Elemento da lista</p>
      <ul>
        {itens.map((element) => (
          <Item element={element} key={element.id} />
        ))}
      </ul>

      <button>Remover ultimo Elemento</button>
      <button>Adicionar Elemento</button>
    </div>
  );
}

function Item({ element }) {
  return (
    <li>
      <p>{element.task}</p>
    </li>
  );
}
/**
 * Estrutura
 

  <div class="learn-list">
      <div class="title">
          My Roadmap
      </div>
      <ul>
          <li>Elemento da lista</li>
      </ul>

      <button>Remover ultimo Elemento</button>
      <button>Adicionar Elemento</button>
  </div>

  No onClick devemos efetuar a ação que esta marcada
 */
