// https://2026-programming.s2427.workers.dev/

import { useState } from "react";
import "./todolist.css";
import Button from "./components/Button.jsx";
import Checkbox from "./components/Checkbox.jsx";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";

class Todo {
  constructor(id, text, isCompleted) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    // 이전 todos에 새로운걸 만들어서 추가하자!! -> 그걸 setTodos하자스!!

    setTodos((todos) => [
      ...todos, // todos에 있는 item을 다 꺼내서 새 리스트에 다시 넣어!@
      new Todo(
        Date.now(), // id : 고유 ID 시간을 이용 (new Date().getTime())
        text, // text : 할 일
        false, // isCompleted : 할 일 완료 여부, 초기값 false
      ),
    ]);
  }

  function toggleTodo(id) {
    setTodos((todos) =>
      // todos에서 하나씩 꺼내서 todo라고 하기, 꺼낸 todo.id가 id와 같다면
      // 새 객체 만들어서 값 복사하고 속성 수정

      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoListApp;
