import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {Link, useHistory } from 'react-router-dom';


const Category=()=>
{
    const history = useHistory();
	const get_laptops=(event)=>{
		localStorage.setItem('type', "Laptop");
		history.push("/laptops");
	}
	// const get_accessories=(event)=>{
	// 	localStorage.setItem('type', "Accessories");
	// 	history.push("/accessories");
	// }
	// const get_fashion=(event)=>{
	// 	localStorage.setItem('type', "Fashion");
	// 	history.push("/fashion");
	// }
	// const get_electronics=(event)=>{
	// 	localStorage.setItem('type', "Electronics");
	// 	history.push("/electronics");
	// }
	// const get_vegetables=(event)=>{
	// 	localStorage.setItem('type', "Vegetables");
	// 	history.push("/vegetables");
	// }
	

    return (
        <>
        <Header/>
        <section class="ftco-section ftco-category ftco-no-pt">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="row">
							<div class="col-md-6 order-md-last align-items-stretch d-flex">
								<div class="category-wrap-2 ftco-animate img align-self-stretch d-flex" style={{backgroundImage: "url(/assets/img/category.jpg)"}}>
									<div class="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><Link to='/vegetables' class="btn btn-primary">Shop now</Link></p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div  class="category-wrap ftco-animate img mb-4 d-flex align-items-end" style={{backgroundImage: "url(/assets/img/laptops.jpg)"}}>
									<div class="text px-3 py-1">
										<h2 class="mb-0"><Link to='/laptops'>Laptops</Link></h2>
									</div>
								</div>
								<div class="category-wrap ftco-animate img d-flex align-items-end" style={{backgroundImage: "url(/assets/img/fashion.jpg)"}}>
									<div class="text px-3 py-1">
										<h2 class="mb-0"><Link to='/fashion'>Fashion</Link></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<div class="category-wrap ftco-animate img mb-4 d-flex align-items-end" style={{backgroundImage: "url(/assets/img/asscories.jpg)"}}>
							<div class="text px-3 py-1">
								<h2 class="mb-0"><Link to='/accessories'>Accessories</Link></h2>
							</div>		
						</div>
						<div class="category-wrap ftco-animate img d-flex align-items-end" style={{backgroundImage: "url(/assets/img/electronics.jpg)"}}>
							<div class="text px-3 py-1">
								<h2 class="mb-0"><Link to='/electronics'>Electronics</Link></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		
        </>
    )
}

export default Category;