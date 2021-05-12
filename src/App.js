import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footers/Footer'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart';
import {CartShop} from './Context/CartContext';

function App() {
  return (
    <div className="App">
        <CartShop>
          <BrowserRouter>
                    <NavBar/>
              <Switch>
                  <Route path="/item/:id">
                      <ItemDetailContainer/> 
                  </Route> 
                  <Route path="/catalogo">
                      <ItemListContainer/>
                  </Route>  
                  <Route path="/category/:id">
                      <ItemListContainer/>
                  </Route>  
                  <Route path="/sobre-nosotros">
                      <About/>
                  </Route>        
                  <Route exact path="/">
                      <Home/>
                      <Gallery/>
                  </Route>
                  <Route exact path="/cart">
                      <Gallery/>
                      <Cart/>
                  </Route>
              </Switch>  
                    <Footer/>     
          </BrowserRouter>       
        </CartShop>
    </div>
  );
}

export default App;
