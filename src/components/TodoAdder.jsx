import { useState } from "react";
import Button from "./Button.jsx";

export default function TodoAdder({addTodo}){
    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(inputTodo); // input에 있는 value를 할 일로 추가하장
    }

    return(
        <form className="todo__form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo__input" 
                placeholder="할 일을 입력하세요."
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    );
}