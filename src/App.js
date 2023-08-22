import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Navbar from './componentes/Navbar/Navbar';


function App() {
  return (
    <div className="App">

       <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 not found</h1>}/>
        </Routes>
        </BrowserRouter> 

    </div>
  );
}

export default App;
