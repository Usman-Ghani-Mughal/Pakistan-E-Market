import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from "./Header";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Card = (props) => {
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
        
             
                                        
               <div class="col-md-6 col-lg-3 ftco-animate">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src={props.imgsrc} alt="Colorlib Template"/>
	    					<div class="overlay"></div>
	    				</a>
    					<div class="text py-3 pb-4 px-3 text-center">
    						<h3><a href="#">{props.title}</a></h3>
							<h4>{props.description}</h4>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>Pkr. {props.price}</span></p>
		    					</div>
	    					</div>
    						<div class="bottom-area d-flex px-3">
	    						<div class="m-auto d-flex">
	    							<a href="" onClick={place_order} class="add-to-cart d-flex justify-content-center align-items-center text-center">
	    								<span><i class="ion-ios-menu"></i></span>
	    							</a>
	    							{/* <a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
	    								<span><i class="ion-ios-cart"></i></span>
	    							</a> */}
	    							{/* <a href="#" class="heart d-flex justify-content-center align-items-center ">
	    								<span><i class="ion-ios-heart"></i></span>
	    							</a> */}
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>






        </>
    )
}

export default Card;