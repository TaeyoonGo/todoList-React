import React from 'react';
import styles from './Header.module.css'
export default function Header({handleFilter}) {
    return (
        <header className={styles.header}>
            <div>
                <button onClick={() => handleFilter('all')}>All</button>
                <button onClick={() => handleFilter('complete')}>Complete</button>
                <button onClick={() => handleFilter('active')}>Active</button>
            </div>
            <div>
                <button>Dark Mode</button>
            </div>
            <div>

            </div>
        </header>
    );
}
