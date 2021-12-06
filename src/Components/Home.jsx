import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Card_home from './Card_home';


const Home = () => {
    const [users, setUser] = useState([]);
    const [products, setproductsarray] = useState([]);

    async function getData() {

        const res = await axios.get('https://e-market-rest-api.herokuapp.com/product/')
        console.warn('************test************')
        console.warn(res.data.data);
        setproductsarray(res.data.data);
        localStorage.setItem('prodcuts', JSON.stringify(res.data.data));
        localStorage.setItem('prodcuts_length', JSON.stringify(res.data.data.length));
    }
    useEffect(() => {
        getData();
        console.warn(users)

    }, []);

    const history = useHistory();
    const add = () => {

        if (localStorage.getItem('email') == null) {
            history.push('/buyer_login')
        }
        else {

        }
    }

    let new_products = localStorage.getItem('prodcuts');
    new_products = JSON.parse(new_products);

    return (
        <>
            <Header />

            <section id="home-section" className="hero">

                <div className="home-slider owl-carousel">
                    <div className="slider-item" style={{ backgroundImage: "url(./assets/img/bg4.jpg)" }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                                <div className="col-md-12 ftco-animate text-center">
                                    <h1 className="mb-2">We serve All Electronic devices</h1>
                                    <h2 className="subheading mb-4">We deliver Branded products, Electronic devices</h2>
                                    <p><a href="#" className="btn btn-primary">View Details</a></p>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="slider-item" style={{ backgroundImage: "url(./assets/img/bg1.png)" }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                                <div className="col-md-12 ftco-animate text-center">
                                    <h1 className="mb-2">We serve Women Dresses</h1>
                                    <h2 className="subheading mb-4">We deliver all kind of Latest Fashion</h2>
                                    <p><a href="/items" className="btn btn-primary">View Details</a></p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="slider-item" style={{ backgroundImage: "url(./assets/img/bg2.png)" }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                                <div className="col-md-12 ftco-animate text-center">
                                    <h1 className="mb-2">We serve men Dresses</h1>
                                    <h2 className="subheading mb-4">We deliver all kind of Latest Fashion</h2>
                                    <p><a href="/items" className="btn btn-primary">View Details</a></p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="slider-item" style={{ backgroundImage: " url(assets/img/bg6.jpg)" }}>
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

                                <div className="col-sm-12 ftco-animate text-center">
                                    <h1 className="mb-2">We serve men shoes</h1>
                                    <h2 className="subheading mb-4">We deliver all kind of Latest shoes</h2>
                                    <p><a href="/items" className="btn btn-primary">View Details</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ftco-section">
                <div class="container">
                    <div class="row no-gutters ftco-services">
                        <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-shipped"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Free Shipping</h3>
                                    <span>On order over pkr 500</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                                    <span class="ti-package"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Always SAVE</h3>
                                    <span>Product well package</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-award"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Superior Quality</h3>
                                    <span>Quality Products</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 text-center d-flex align-self-stretch ftco-animate">
                            <div class="media block-6 services mb-md-0 mb-4">
                                <div class="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                                    <span class="flaticon-customer-service"></span>
                                </div>
                                <div class="media-body">
                                    <h3 class="heading">Support</h3>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="section">

                <div class="container">

                    <div class="row">

                    <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="assets/img/collection4.jpg" alt="" />
                                </div>
                                <div class="shop-body">
                                    <h3>Accessories<br />Collection</h3>
                                    <a href="/items" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="assets/img/collection2.jpg" alt="" />
                                </div>
                                <div class="shop-body">
                                    <h3>Shoes & Dresses<br />Collection</h3>
                                    <a href="/items" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-4 col-xs-6">
                            <div class="shop">
                                <div class="shop-img">
                                    <img src="assets/img/collection5.jpg" alt="" />
                                </div>
                                <div class="shop-body">
                                    <h3>Electronic<br />Collection</h3>
                                    <a href="/items" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div class="section">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="section-title">
                                <h3 class="title">New Products</h3>
                                <div class="section-nav">
                                    <ul class="section-tab-nav tab-nav">
                                        <li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                                        <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="products-tabs">
                                    <div id="tab1" class="tab-pane active">
                                        <div class="products-slick" data-nav="#slick-nav-1">
                                            

                                            <div class="product">
                                                <div class="product-img">
                                                    <img src={new_products[0].image_path} alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">30%</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">{new_products[0].type}</p>
                                                    <h3 class="product-name"><a href="#">{new_products[0].name}</a></h3>
                                                    <h4 class="product-price">pkr {new_products[0].price} <del class="product-old-price">pkr {100000}</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn" onClick={add}><i class="fa fa-shopping-cart"></i> add to cart</button>
                                                </div>
                                            </div>

                                            <div class="product">
                                                <div class="product-img">
                                                    <img src={new_products[1].image_path} alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">{new_products[1].type}</p>
                                                    <h3 class="product-name"><a href="#">{new_products[1].name}</a></h3>
                                                    <h4 class="product-price">pkr {new_products[1].price} <del class="product-old-price">pkr {new_products[1].price}</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn" onClick={add}><i class="fa fa-shopping-cart"></i> add to cart</button>
                                                </div>
                                            </div>

                                            <div class="product">
                                                <div class="product-img">
                                                    <img src={new_products[2].image_path} alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">{new_products[2].type}</p>
                                                    <h3 class="product-name"><a href="#">{new_products[2].name}</a></h3>
                                                    <h4 class="product-price">pkr {new_products[2].price} <del class="product-old-price">pkr {new_products[2].price}</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn" onClick={add}><i class="fa fa-shopping-cart"></i> add to cart</button>
                                                </div>
                                            </div>
                                            <div class="product">
                                                <div class="product-img">
                                                    <img src={new_products[3].image_path} alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">{new_products[3].type}</p>
                                                    <h3 class="product-name"><a href="#">{new_products[3].name}</a></h3>
                                                    <h4 class="product-price">pkr {new_products[3].price} <del class="product-old-price">pkr {new_products[3].price}</del></h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                    <div class="product-btns">
                                                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                                                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                                                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                                                    </div>
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn" onClick={add}><i class="fa fa-shopping-cart"></i> add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="slick-nav-1" class="products-slick-nav"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="hot-deal" class="section" style={{ backgroundImage: "url('assets/img/hotdeal.png')" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="hot-deal">
                                <ul class="hot-deal-countdown">
                                    <li>
                                        <div>
                                            <h3>02</h3>
                                            <span>Days</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>10</h3>
                                            <span>Hours</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>34</h3>
                                            <span>Mins</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <h3>60</h3>
                                            <span>Secs</span>
                                        </div>
                                    </li>
                                </ul>
                                <h2 class="text-uppercase">hot deal this week</h2>
                                <p>New Collection Up to 50% OFF</p>
                                <a class="primary-btn cta-btn" href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latest-wrapper lf-padding">
                <div className="latest-area latest-height d-flex align-items-center" data-background="assets/img/collection/latest-offer.png">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                                <div className="latest-caption">
                                    <h2>Get Our<br />Latest Offers News</h2>
                                    <p>Subscribe news latter</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 ">
                                <div className="latest-subscribe">
                                    <form action="#">
                                        <input type="email" placeholder="Your email here" />
                                        <button>Shop Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="man-shape">
                        <img src="assets/img/collection/latest-man.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="shop-method-area section-padding30">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-package"></i>
                                <h6>Free Shipping Method</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-unlock"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-reload"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home;