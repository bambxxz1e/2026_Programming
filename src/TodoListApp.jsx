import { useState } from "react";

function TodoListApp(){
  const [todo, setTodo] = useState("");

  return(
    <>
      <h1>ToDo ToDo</h1>

      <form>
        <input type="text"/>
        <button>Add</button>
      </form>

      <ul>
        <li>
          <input type="checkbox" name="" id="" />
          <label>옷 싸기</label>
          <button>🖋️</button>
          <button>🗑️</button>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <label>잠자기</label>
          <button>🖋️</button>
          <button>🗑️</button>
        </li>
      </ul>
    </>
  );
}

export default TodoListApp;