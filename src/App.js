import './App.css';
import NavBar from './Components/navBar/NavBar';
import ItemListContainer from "./Components/itemListContainer/ItemListContainer"
import Name from './Components/name/Name'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
        <Name nombre='LF'/>  
      </header>
    </div>
  );
}

export default App;
