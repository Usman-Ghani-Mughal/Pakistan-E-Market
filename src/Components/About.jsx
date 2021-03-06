import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

const About=()=>
{
	

    return (
        <>
        <Header/>
        <div class="hero-wrap hero-bread" style={{backgroundImage: "url('/assets/img/about3.jpg')"}}>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
          	<p class="breadcrumbs"><span class="mr-2"><a href="/home">About</a></span> <span>us</span></p>
            <h1 class="mb-0 bread">Pakistan Local E-Market</h1>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section ftco-no-pb ftco-no-pt bg-light">
			<div class="container">
				<div class="row">
					<div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: "url('/assets/img/about.jpg')"}}>
						<a href="#" class="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span class="icon-play"></span>
						</a>
					</div>
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section-bold mb-4 mt-md-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">Pakistan Local E-Market Store</h2>
	            </div>
	          </div>
	          <div class="pb-md-5">
	          	<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
							<p><a href="/item" class="btn btn-primary">Shop now</a></p>
						</div>
					</div>
				</div>
			</div>
		</section>

        </>
    )
}

export default About;