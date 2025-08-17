import './App.css'
import {useState, useContext, useEffect} from "react";
import Header from "./components/Header/Header.jsx";
import {DarkModeContext} from "./context/ThemeContext.jsx";
import AddTodo from "./components/AddTodo/AddTodo.jsx";


function App() {
    const [todos, setTodos] = useState(() => {
        const storedData = localStorage.getItem('todos');
        return storedData ? JSON.parse(storedData) : []
    });
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");
    const {darkMode} = useContext(DarkModeContext);
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

    useEffect(() => {
        const storedData = localStorage.getItem("todos");
        if (storedData) {
            console.log(JSON.parse(storedData))
            setTodos(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="layout">
            <div className={`${darkMode ? 'dark-mode' : ''} container`}>
                <Header handleFilter={handleFilter}/>
                <main className="app-main">
                    <ul>
                        {
                            displayTodos.map((todo) => <li key={todo.id}>
                                <input type="checkbox" onChange={() => handleToggle(todo.id)}
                                       checked={todo.isDone}/>
                                <span
                                    style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.text}</span>
                                <button onClick={() => handleDelete(todo.id)}>X</button>
                            </li>)
                        }
                    </ul>
                </main>
                <AddTodo inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos} />
            </div>
        </div>
    )
}

export default App
