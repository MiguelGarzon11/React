import React from 'react';
import styles from './Boton.module.css';

function Boton() {
    return (
        <button
            className={`bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded ${styles.parpadeo}`}
        > 
            Haz clic
        </button>
    );
}

export default Boton;
