import './App.css';
import React from "react";
import Index from './Components/Index';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Items from './Components/Items';
import Card from './Components/Card';
import Seller_profile from './Components/Seller_profile';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router>
    <Index/>
   {/* <Cart /> */}
    </Router>
    </>
  );
}

export default App;
