import logo from './big.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo}  alt="logo" width='200' heigh='200' />
        <p>
        Technicall Challenge
        </p>
      </header>

      <div>
        <p>Desarrolla una aplicación / componentes que muestre un listado donde :</p>
        <div>
        <ol>
          <p> * Agregar elementos</p>
          <p> * Eliminar elementos</p>
          <p> * Buscar elementos en listado</p>
        </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
