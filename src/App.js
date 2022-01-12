
import './App.css';

import Navbar from './components/navbar';
import {CartProvider} from "react-use-cart";
import Footer from './components/footer';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/login';
import Cart from './components/cart';
import About from './components/About'
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetail';

function App() {
  
  return (
     <div className="App">
        <Router>
       <CartProvider>
        <Navbar/>
          <Switch>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='/About' component={About}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/product/:id' component={ProductDetails}/>
          </Switch>
          </CartProvider>
          <Footer ></Footer >
          </Router>
   </div>
  );
}

export default App;
