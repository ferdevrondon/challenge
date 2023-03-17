import { useState } from 'react';
import logo from './big.png';
import './App.css';
import Formulario from './components/formulario/Formulario';
import Lista from './components/list/Lista';
import Buscador from './components/buscador/Buscador';

function App() {
  const [dataList, setDataList] = useState([
    { id: 1, text: "Hacer challenge"}
  ])
  const [searchData, setSearchData] = useState([]);

  const addTask = (task) => {
      const newTask = { id: dataList.length + 1, text: task }
      setSearchData([])
      setDataList([...dataList, newTask])
  }

  const deleteTask = (id) => {
    const updateDataList = dataList.filter( data => data.id !== id);
    setDataList(updateDataList)
  }

  const searchTask = (task) => {
    const filteredTasks = dataList.filter( data => data.text.toLowerCase().includes(task.toLowerCase()));
    setSearchData(filteredTasks);
  };


  return (
    <div className="App">
      <header>
        <img src={logo}  alt="logo" width='200' heigh='200' />
        <h1>
          Technicall Challenge
        </h1>
      </header>
      <Buscador searchTask={searchTask}/>
      <Lista dataList={dataList} searchData={searchData} deleteTask={deleteTask}/>
      <Formulario addTask={addTask}/>
      


      {/* <div>
        <p>Desarrolla una aplicación / componentes que muestre un listado donde :</p>
        <div>
        <ol>
          <p> * Agregar elementos</p>
          <p> * Eliminar elementos</p>
          <p> * Buscar elementos en listado</p>
        </ol>
        </div>
      </div> */}
    </div>
  );
}

export default App;
