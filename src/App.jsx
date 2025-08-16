import './App.css'
import React, {useState} from "react";
import Header from "./components/Header/Header.jsx";


function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

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
    const handleDelete = (id) => {
        const result = confirm('삭제하시겠습니까?')
        if (!result) {
            return false;
        }
        const updateTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updateTodos);
    }
    const handleToggle = (id) => {
        const updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, isDone: !todo.isDone};
            }
            return todo
        })
        setTodos(updateTodos);
    }
    const getFilteredTodos = () => {
        if (filter === "all") {
            return todos
        } else if (filter === "complete") {
            return todos.filter((todo) => todo.isDone)
        } else if (filter === 'active') {
            return todos.filter((todo) => !todo.isDone)
        }
    }
    const handleFilter = (active) => {
        setFilter(active);
    };

    const displayTodos = getFilteredTodos();


    return (
        <>
            <div className="container">
                <Header handleFilter={handleFilter} />
                <main className="app-main">
                    <ul>
                        {
                            displayTodos.map((todo) => <li key={todo.id}>
                                <input type="checkbox" onChange={() => handleToggle(todo.id)} checked={todo.isDone}/>
                                <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.text}</span>
                                <button onClick={() => handleDelete(todo.id)}>X</button>
                            </li>)
                        }
                    </ul>
                </main>
                <footer className="app-footer">
                    <input type="text" onChange={handleChange} value={inputValue} name="input"/>
                    <button onClick={handleClick}>ADD+</button>
                </footer>
            </div>

        </>
    )
}

export default App
