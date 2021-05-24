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
                </Switch>  
                        <Footer/>     
            </BrowserRouter>       
        </CartShop>
    </div>
  );
}

export default App;
