import React, {useEffect} from 'react';

export default function AddTodo({inputValue,setInputValue,todos,setTodos}) {
    const handleChange = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }
    const handleClick = () => {
        if (inputValue === "") {
            return alert('빈값을 넣으면 안되요');
        }
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            isDone: false
        }
        setTodos([...todos, newTodo]);
        setInputValue("");
    }


    return (
        <footer className="app-footer">
            <input type="text" onChange={handleChange} value={inputValue} name="input"/>
            <button onClick={handleClick}>ADD+</button>
        </footer>
    );
}
