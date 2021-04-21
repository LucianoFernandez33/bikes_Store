
import './App.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from "./Components/itemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="HOLA A TODOS" />
           
      </header>
    </div>
  );
}

export default App;
