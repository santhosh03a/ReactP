
import './App.css';

import Navbar from './components/navbar';
import {CartProvider} from "react-use-cart";
import Footer from './components/footer';
import Register from './components/Register';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Payment from './components/Payment';
import Home from './Home';
import Login from './login';
import Cart from './components/cart';
import Payhome from './components/Payhome';
import Glogin from './components/Glogin';
import Contact from './Contact';
import About from './About';
import Ty from './Ty';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {  
  return (
     <div className="App">
        <Router>
       <CartProvider>
        <Navbar/>
          <Switch>
          <Route exact path='/Home2' component={Home2}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Payhome' component={Payhome}/>
          <Route exact path='/Payment' component={Payment}/>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='/Glogin' component={Glogin}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/Ty' component={Ty}/>
          </Switch>
          </CartProvider>
          <Footer ></Footer >
          </Router>
   </div>
  );
}

export default App;
