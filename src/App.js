
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
          </Switch>
          </CartProvider>
          </Router>
   </div>
  );
}

export default App;
