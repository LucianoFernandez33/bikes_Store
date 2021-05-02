import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footers/Footer'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetail from "./Components/ItemDetail/ItemDetail"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <NavBar/>
          <Switch>
              <Route path="/item/:id">
                  <ItemDetailContainer/> 
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
