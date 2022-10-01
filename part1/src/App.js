import './App.css';
import ColorTitle from './ColorTitle.js';

function App() {
  return (
    <div className="App">
      Hola Mundo!
      <ColorTitle color='green' title='Verde'/>
      <ColorTitle color='red' title='Rojo'/>
      <ColorTitle color='blue' title='Azul'/>
    </div>
  );
}

export default App;
