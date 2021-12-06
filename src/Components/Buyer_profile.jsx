import React ,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory } from "react-router-dom";
import axios from "axios";


const Buyer_profile=()=>
{
    const history=useHistory();

    const edit=()=>{
        history.push('/edit_buyer')
    }
	

    const [users,setUsers]=useState([]);
    const [orders,setOrders]=useState([]);


    const deletee=(id)=>{      
        axios.delete('https://e-market-rest-api.herokuapp.com/product/?id='+id)
          .then(() => this.setState({ status: 'Delete successful' }));
  
      }
  
    const sid=localStorage.getItem('buyer_id')
    async function getData(){
      
        const res=await axios.get('https://e-market-rest-api.herokuapp.com/buyer/profile?id='+sid)
        setUsers(res.data.data);


        const res1=await axios.get('https://e-market-rest-api.herokuapp.com/buyer/orders?id=1')
        setOrders(res1.data.data);
        console.warn('**********check orders***********')
        console.warn(res1)
       
    
    }

    useEffect(()=>{
      

        getData();
    },[]);
    
    return (
        <>
        <Header/>
<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img style={{width:"200px" ,height:"200px"}}  src={users.image_path} alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {users.name}
                                    </h5>
                                    <h6>
                                        {users.email}
                                    </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                    <br/>
                    <button type="button" onClick={edit} class="btn btn-warning">Edit Profile</button>
                    &nbsp; &nbsp;
                    &nbsp; &nbsp;
                    <button type="button" onClick={deletee} class="btn btn-danger">Delete Profile</button>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                           
                        </div>
                    </div>
                    <div class="col-md-8">
                        
                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{sid}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{users.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{users.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{users.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{users.address}</p>
                                            </div>
                                        </div>
                    </div>
                </div>
            </form>           
        </div>
		<br/><br/><br/><br/><br/><br/><br/>


        </>
    )
}

export default Buyer_profile;