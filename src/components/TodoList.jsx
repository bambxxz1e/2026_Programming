import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"

export default function TodoList({todos}){
    return(
        <ul className="todo__list">
            {/* todos가 없으면 */}
            {todos.length == 0 && <TodoItemEmpty />}

            {/* todos가 있으면 TodoItem에 todos 던지기 */}
            {todos.length > 0 &&
                // todos에서 하나씩 꺼내서 <TodoItem todo={todo}/>
                todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
            }
        </ul>
    )
}