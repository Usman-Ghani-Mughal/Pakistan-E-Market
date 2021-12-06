import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from "./Header";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Card_home = (props) => {
	const history = useHistory();

	console.warn('**********************-----------')
	const place_order=(event)=>{
		event.preventDefault();

		if(!localStorage.getItem('buyer'))
		{
			history.push("/buyer_login")
		}
		const dataArray = {seller_id:props.seller_id,product_id:props.product_id,buyer_id:parseInt(localStorage.getItem('buyer_id')),quantity:1,amount:parseInt(props.price),order_description:props.description }
			console.warn(dataArray)
		axios.post("https://e-market-rest-api.herokuapp.com/order/place/", dataArray, {
			headers: {
				'Content-Type': 'application/json'
			}
		  })
		  .then((response) => {
			  if (response.status == 200) {
				  alert("You have successfully place order")
					  history.push('/items')
				   }
		  })
		  .catch((error) => {
			  alert("Add Again")
			 history.push('/add_product')
		  });
		
		
		
		
	}

    return (
        <>
          <div class="product">
                                                <div class="product-img">
                                                    <img src={props.imgsrc} alt="" />
                                                    <div class="product-label">
                                                        <span class="sale">-30%</span>
                                                        <span class="new">NEW</span>
                                                    </div>
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a href="#">{props.title}</a></h3>
                                                    <h4 class="product-price">Pkr. {props.price} </h4>
                                                    <div class="product-rating">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                   
                                                </div>
                                                <div class="add-to-cart">
                                                    <button class="add-to-cart-btn" onClick={place_order}><i class="fa fa-shopping-cart"></i> Place order</button>
                                                </div>
                                            </div>
        
      
                                        
            





        </>
    )
}

export default Card_home;