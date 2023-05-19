import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import DetalleProducto from './Components/DetalleProducto/DetalleProducto'
import { Routes, Route ,BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/'element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element ={<DetalleProducto/>}/>
            <Route path='*' element={<h1> 404 No encontrado</h1>} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
