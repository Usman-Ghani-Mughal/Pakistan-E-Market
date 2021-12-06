import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Buyer_Login=()=>
{

    const history = useHistory();

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const submit = async (e) => {

       
        e.preventDefault();
        
        const article = { email_username: email, password: password };
        const response = await fetch('https://e-market-rest-api.herokuapp.com/buyer/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
            
        },
            body: JSON.stringify(article)
        });
        const content = await response.json();

        
        if (response.status == 200) {
            console.warn("************************Successful****************")
            localStorage.setItem("email", email);
            localStorage.setItem("buyer", "buyer");
            localStorage.setItem('user',content.user_details.name)
            localStorage.setItem("buyer_id", content.user_details.id);




            history.push('/home');
        }
        else {
            setErr("Eror login again")
        } 
       
    
      
    }
    return (
        <>
        <Header/>
        <div className="slider-area ">
     
        <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap text-center">
                            <h2>Login</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       <section className="login_part section_padding ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_text text-center">
                        <div className="login_part_text_iner">
                            <h2>New to our Shop?</h2>
                            <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                            <a href="/buyer_register" className="btn_3">Create an Account</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_form">
                        <div className="login_part_form_iner">
                            <h3>Welcome Buyer Account <br/>
                                Please Sign in now</h3>
                            <form className="row contact_form"  novalidate="novalidate">
                            <div  className="col-md-12 form-group p_star">
                                        {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" required /> */}
                                        <input placeholder="Email*" 
                                            type="text"
                                            className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                       
'
                                    
                                    </div>

                                    <div className="col-md-12 form-group p_star">
                                        <input   placeholder="Password"
                                            type="password" 
                                            className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                        
                                    </div>
                                <div className="col-md-12 form-group">
                                    <div className="creat_account d-flex align-items-center">
                                        <input type="checkbox" id="f-option" name="selector"/>
                                        <label for="f-option">Remember me</label>
                                    </div>
                                    <button type="submit" value="submit"  onClick={submit} className="btn_3">
                                        log in
                                    </button>
                                    <a className="lost_pass" href="#">forget password?</a>
                                </div>
                                <h6 style={{ color: "red" }} >{err}</h6>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Buyer_Login;