import React, { useState } from "react";

const Buscador = ({searchTask}) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        searchTask(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
               type="text"
               value={text}
               onChange={(event) => setText(event.target.value)}
            />
            <button type="submuit">Buscar</button>
        </form>
    )
};

export default Buscador;