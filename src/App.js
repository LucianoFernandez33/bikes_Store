import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footers/Footer'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import ItemCart from './Components/ItemCart/ItemCart';
import {CartShop} from './Context/CartContext';
import ItemHotSaleContainer from './Components/ItemHotSaleContainer/ItemHotSaleContainer';
import CheckOut from './Components/CheckOut/CheckOut';
import Orders from './Components/Orders/Orders';


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
                    <Route path="/categories/:id">
                        <ItemListContainer/>
                    </Route>  
                    <Route path="/sobre-nosotros">
                        <About/>
                    </Route>        
                    <Route exact path="/">
                        <Home/>
                        <ItemHotSaleContainer/>
                        <Gallery/>
                    </Route>
                    <Route exact path="/cart">
                        <Gallery/>
                        <ItemCart/>
                    </Route>
                    <Route exact path="/CheckOut">
                        <Gallery/>
                        <CheckOut/>
                    </Route>
                    <Route exact path="/Orders">
                        <Gallery/>
                        <Orders/>
                    </Route>
                </Switch>  
                        <Footer/>     
            </BrowserRouter>       
        </CartShop>
    </div>
  );
}

export default App;
