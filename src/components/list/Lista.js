import React from "react";

const Lista  = ({dataList, searchData, deleteTask}) => {

    const data = searchData.length ? searchData : dataList;

    const removeTask = (id) => {
        deleteTask(id);
    };

    return (
        <ul>
            {data.map( (dato) => (
                <li key={dato.id}>
                    {dato.text}
                    <button onClick={() => removeTask(dato.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    )
}


export default Lista;