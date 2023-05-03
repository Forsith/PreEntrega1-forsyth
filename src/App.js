import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludos={'Bienvenido a KUMBA!'}/>
    </div>

  );
}

export default App;
