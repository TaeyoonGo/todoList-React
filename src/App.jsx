import './App.css'
import {useState} from "react";


function App() {
    const [todos,setTodos] = useState([]);
    const [inputValue , setInputValue] = useState("");
    const handleChange = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }

    const handleClick = () => {
        if(inputValue === ""){
            return alert('빈값을 넣으면 안되요');
        }
        setTodos([inputValue,...todos]);
        setInputValue("");
    }
    return (
        <>
            <div className="container">
                <header className="app-header">

                </header>
                <main className="app-main">
                    <ul>
                        {
                            todos.map((todo)=> <li>{todo}</li>)
                        }
                    </ul>
                </main>
                <footer className="app-footer">
                    <input type="text" onChange={handleChange} value={inputValue} name="input" />
                    <button onClick={handleClick}>ADD+</button>
                </footer>
            </div>

        </>
    )
}

export default App
