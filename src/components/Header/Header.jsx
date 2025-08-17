import React, {useContext} from 'react';
import styles from './Header.module.css'
import {DarkModeContext} from "../../context/ThemeContext.jsx";
export default function Header({handleFilter}) {
    const {toggleDarkMode} = useContext(DarkModeContext);
    return (
        <header className={` ${styles.header}`}>
            <div>
                <button onClick={() => handleFilter('all')}>All</button>
                <button onClick={() => handleFilter('complete')}>Complete</button>
                <button onClick={() => handleFilter('active')}>Active</button>
            </div>
            <div>
                <button onClick={ () => toggleDarkMode()}>Dark Mode</button>
            </div>
            <div>

            </div>
        </header>
    );
}
