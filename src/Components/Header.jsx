import React from 'react';
import { Link, useHistory } from 'react-router-dom';



const Header = () => {
    const history = useHistory();
    const user = localStorage.getItem('user');

    const Logout = () => {
        localStorage.clear()
        history.push('./buyer_login')
    }


    return (
        <>
            <header>
                <div className="header-area">
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2">
                                        <div >
                                            <a href="/home"><img  src="/assets/img/logo.jpeg" alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="/home">Home</a></li>
                                                    <li><Link to="/category">Category</Link></li>
                                                    <li className="hot"><Link to="#">Latest</Link>
                                                        <ul className="submenu">
                                                            <li><Link to="/items"> Product list</Link></li>
                                                            <li><Link to="single-product.html"> Product Details</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/items">All Products</Link>          </li>
                                                    <li><Link to="#">Pages</Link>
                                                        <ul className="submenu">
                                                            <li><Link to="/about">About</Link></li>
                                                            <li><Link to="/cart">Orders</Link></li>
                                                            <li><Link to="/checkout">Product Checkout</Link></li>
                                                            {
                                                                localStorage.getItem('buyer') ?
                                                                    <li><Link to="/buyer_profile">Buyer Profile</Link></li> :
                                                                    <li></li>
                                                            }
                                                            {
                                                                localStorage.getItem('seller') ?
                                                                    <li><Link to="/seller_profile">Seller Profile</Link></li> :
                                                                    <li></li>
                                                            }


                                                        </ul>
                                                    </li>
                                                    <li><a href="/contact">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                            <li className="d-none d-xl-block">
                                                <div className="form-box f-right ">

                                                </div>
                                            </li>
                                            <li className=" d-none d-xl-block">
                                                <div className="favorit-items">
                                                    <i className="far fa-heart"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-card">
                                                    <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                                                </div>
                                            </li>
                                            {
                                                localStorage.getItem('user') ?
                                                
                                                    <li style={{ fontSize: '18px' }} className="d-none d-lg-block"> <a style={{ color: "#E7AB3C" }} onClick={Logout}><i className="fa fa-sign-out"></i><b> Logout {user}</b></a></li>
                                                    :

                                                    <div class="dropdown" style={{ float: "right" }}>
                                                        <button class="dropbtn">Login</button>
                                                        <div class="dropdown-content">
                                                            <a href="/buyer_login">Buyer Login</a>
                                                            <a href="/seller_login">Seller Login</a>
                                                        </div>
                                                    </div>
                                            }

                                        </ul>
                                    </div>

                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}

export default Header;