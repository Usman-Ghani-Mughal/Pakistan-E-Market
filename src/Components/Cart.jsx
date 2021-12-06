import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

import axios from "axios";

const Cart = () => {


	const history = useHistory();


	const [users, setUsers] = useState([]);
	let [total, setTotal] = useState(0);


	const add = () => {

		history.push("/add_product");
	}
	const sid = localStorage.getItem('buyer_id')
	async function getData() {

		const res1 = await axios.get('https://e-market-rest-api.herokuapp.com/product')

		const array=[]
		const res = await axios.get('https://e-market-rest-api.herokuapp.com/buyer/orders?id=' + sid)
		setUsers(res.data.data);
		console.warn("***********************************************")
		console.warn(res.data.data[0].product_id)
		console.warn(res.data.data)

		for (var i = 0; i < res.data.data.length; i++) {
			for (var j = 0; j < res1.data.data.length; j++) {

				if(res.data.data[i].product_id===res1.data.data[j].id)
				{
						array.push(res1.data.data[j])
						total=total+parseInt(res1.data.data[j].price)
						setTotal(total)
						
						
				}

			}
		}
		console.warn('******************total**************************')
		console.warn(total)
		setUsers(array)



	}

	useEffect(() => {


		getData();
	}, []);
	const editt = (id) => {
	}

	const deletee = (id) => {
		axios.delete('https://e-market-rest-api.herokuapp.com/product/?id=' + id)
			.then(() => this.setState({ status: 'Delete successful' }));

	}


	return (
		<>
<Header/>

			<div class="hero-wrap hero-bread" style={{ backgroundImage: "url('/assets/img//bg_1.jpg')" }}>
				<div class="container">
					<div class="row no-gutters slider-text align-items-center justify-content-center">
						<div class="col-md-9 ftco-animate text-center">
							<p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
							<h1 class="mb-0 bread">Order Place</h1>
						</div>
					</div>
				</div>
			</div>

			<section class="ftco-section ftco-cart">
				<div class="container">
					<div class="row">
						<div class="col-md-12 ftco-animate">
							<div class="cart-list">
								<table class="table">
									<thead class="thead-primary">
										<tr class="text-center">
											<th>&nbsp;</th>
											<th>&nbsp;</th>
											<th>Product name</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										{
											users.map((val) => {
												return (
													<>
														<tr class="text-center">
															<td class="product-remove"><a href="#"><span class="ion-ios-close"></span></a></td>

															<td class="image-prod"><div class="img" style={{ backgroundImage: `url(${val.image_path})` }}></div></td>

															<td class="product-name">
																<h3>{val.name}</h3>
																<p>{val.description}</p>
															</td>

															<td class="price">pkr.{val.price}</td>

															<td class="quantity">
																<div class="input-group mb-3">
																	<input type="text" name="quantity" class="quantity form-control input-number" value={val.quantity} min="1" max="100" />
																</div>
															</td>

															<td class="total">{val.price}</td>
														</tr>

											
													</>

												)
											}
											)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="row justify-content-end">
					
					
						<div class="col-lg-4 mt-5 cart-wrap ftco-animate">
							<div class="cart-total mb-3">
								<h3>Totals Orders</h3>
								<p class="d-flex">
									<span>Subtotal</span>
									<span>Rs. {total}</span>
								</p>
								<p class="d-flex">
									<span>Delivery</span>
									<span>Rs 100.00</span>
								</p>
								<p class="d-flex">
									<span>Discount</span>
									<span>Rs 80.00</span>
								</p>
								<hr />
								<p class="d-flex total-price">
									<span>Total</span>
									<span>{total+180}</span>
								</p>
							</div>
							<p><a href="/checkout" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
						</div>
					</div>
				</div>
			</section>


		</>
	)
}

export default Cart;