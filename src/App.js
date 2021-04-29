import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/home/Home'
import NavBar from './Components/navBar/NavBar';
import Footer from './Components/footer/Footer'
import ItemListContainer from "./Components/itemListContainer/ItemListContainer"
import ItemDetail from "./Components/itemDetail/ItemDetail"
import Name from './Components/name/Name'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <NavBar/>
          <Switch>
              <Route path="/detalle-del-producto">
                  <ItemDetail/> 
              </Route> 
              <Route path="/bikes">
                  <ItemListContainer/>
              </Route>  
              <Route path="/detail">
                  <ItemDetail/>
              </Route>        
              <Route exact path="/">
                  <Home/>
              </Route>
          </Switch>  
                <Footer/>     
      </BrowserRouter>       
    </div>
  );
}

export default App;
