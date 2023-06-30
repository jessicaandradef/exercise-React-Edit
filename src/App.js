import "./styles.css";
//Substitui o Componente com o Comonente do exercicio que pretendes usar
// Ex <Exercicio1 />
import Counter from "./components/Exercicio1/Exercicio1";
import ToDoList from "./components/Exercicio2/Exercicio2";

export default function App() {
  return (
    <div>
      <Counter />
      <ToDoList />
    </div>
  );
}
