import './App.css';
import Productos from './Componentes/Productos';

function App() {
  return (
    <div className="App">
      <Productos initialNumber={0} initialNumberImagen={0}></Productos>
    </div>
  );
}

export default App;
