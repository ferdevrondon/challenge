import React, { useState } from "react";

const Formulario = ( {addTask} ) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
               type="text"
               value={text}
               onChange={(event) => setText(event.target.value)}
            />
            <button type="submuit">Agregar tarea</button>
        </form>
    )
}

export default Formulario;