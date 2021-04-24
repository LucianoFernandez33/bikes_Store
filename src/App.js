import './App.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from "./Components/itemListContainer/ItemListContainer"
import Name from './Components/name/Name'
function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      <header className="App-header">
        <Name nombre='LF'/>  
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
