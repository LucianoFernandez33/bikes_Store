import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="HOLA A TODOS" />
        <img src={logo} className="App-logo" alt="logo" />    
      </header>
    </div>
  );
}

export default App;
