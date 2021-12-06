import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Buyer_Login from "./Buyer_Login";
import Buyer_Register from "./Buyer_Register";
import Testing from "./Testing";
import Seller_login from "./Seller_login";
import Seller_register from "./Seller_register";
import Items from "./Items";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Category from "./Category";
import Buyer_profile from "./Buyer_profile";
import Seller_profile from "./Seller_profile";
import Add_product from "./Add_product";
import Edit_product from "./Edit_product";
import Protected from "./Procteted";
import Seller_orders from "./Seller_orders";
import Edit_buyer from "./Edit_buyer";
import Edit_Seller_profile from "./Edit_Seller_profile";
const Index = () => {

  

    return (
        <>
            <Switch>
                
                <Route exact path='/home'>
                    <Protected component={Home} />
                </Route>
                <Route path="/buyer_login"><Buyer_Login /></Route>
                <Route path="/buyer_register"><Buyer_Register /></Route>
                <Route path="/seller_login"><Seller_login /></Route>
                <Route path="/seller_register"><Seller_register /></Route>
                <Route path="/buyer_profile"><Buyer_profile /></Route>
                <Route path="/seller_profile"><Seller_profile /></Route>
                
                <Route exact path='/items'>
                    <Protected component={Items} />
                </Route>
                <Route exact path='/cart'>
                    <Protected component={Cart} />
                </Route>

                <Route path="/contact"><Contact /></Route>
                <Route path="/about"><About /></Route>


                <Route path="/add_product"><Add_product /></Route>

                <Route exact path='/checkout'>
                    <Protected component={Checkout} />
                </Route>
                <Route exact path='/category'>
                    <Protected component={Category} />
                </Route>                

                <Route path="/testing"><Testing /></Route>
                <Route path="/edit_product"><Edit_product /></Route>

                <Route path="/seller_orders"><Seller_orders/></Route>
                <Route path="/edit_buyer"><Edit_buyer/></Route>
                <Route path="/edit_seller"><Edit_Seller_profile/></Route>



                <Redirect to='/home' />

              




            </Switch>

            <Footer />


        </>
    )
}

export default Index;