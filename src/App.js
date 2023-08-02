import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <div className="App">
       <>
        <Navbar/>
        <ItemListContainer greeting="Hola Mundo"/>
      </>   
    </div>
  );
}

export default App;
