import React ,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Header from "./Header";
import sdata from './sdata';
import axios from "axios";
import Edit_product from './Edit_product';


const Seller_profile = () => {
    const history=useHistory();

    const editp=()=>{
      history.push('/edit_seller')
  }



  const deleteep=(id)=>{      
      axios.delete('https://e-market-rest-api.herokuapp.com/seller/?id='+id)
        .then(() => this.setState({ status: 'Delete successful' }));

    }

    const [users,setUsers]=useState([]);

    const add=()=>{

        history.push("/add_product");
    }
    const order=()=>{

      history.push("/seller_orders");
  }
    const sid=localStorage.getItem('seller_id')
    async function getData(){
      
        const res=await axios.get('https://e-market-rest-api.herokuapp.com/seller/products?id='+sid)
        setUsers(res.data.data);
       
    
    }

    useEffect(()=>{
      

        getData();
    },[]);
    const editt=(id,name,price,type,quantity)=>{
      localStorage.setItem('pid',id)
      localStorage.setItem('name',name) 
      localStorage.setItem('price',price)  
      localStorage.setItem('type',type)  
      localStorage.setItem('quantity',quantity)  
      history.push('/edit_product')


    }
    
    const deletee=(id)=>{      
      axios.delete('https://e-market-rest-api.herokuapp.com/product/?id='+id)
        .then(() => this.setState({ status: 'Delete successful' }));

    }

    return (
        <>
        <Header/>
        <br/><br/><br/><br/><br/>
        <div class="col-md-2">
                    <br/>
                    <button type="button" onClick={editp} class="btn btn-warning">Edit Profile</button>
                    &nbsp; &nbsp;
                    &nbsp; &nbsp;
                    <button type="button" onClick={deleteep} class="btn btn-danger">Delete Profile</button>

                    </div>

        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>Products that you are offering</b>
        </h5>
        
         
    <button onClick={add} class="btn btn-primary"> Create New Product</button>
    <button onClick={order} class="btn btn-primary"> Check Orders</button>


    
      </div>


      
<div class="container-fluid">

<div class="card shadow mb-4">
 

  <div class="card-body">
  
    <div class="table-responsive">

      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>id</th>
            <th>Type</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller ID</th>
            <th>Image Path</th>
            
            <th>EDIT </th>
            <th>DELETE </th>
            
          </tr>
        </thead>
        <tbody>
        {
    users.map((val)=>{
    return  (
        <>
            <tr>
    
                <td>{val.name}</td>
                <td>{val.id} </td>
                <td>{val.type} </td>
                <td>{val.price} </td>
                <td>{val.quantity}   </td>
                <td>{sid}   </td>
                <td>{val.image_path} </td>


                
                <td>
                <form>
                <button type="submit" name="submit"  onClick={() => editt(val.id,val.name,val.price,val.type,val.quantity)} class="btn btn-warning"> EDIT</button>
                
                </form>
            </td>
            <td>
                <form >
                  <button type="submit" name="submit"  onClick={() => deletee(val.id)} class="btn btn-danger"> DELETE</button>
                </form>
            </td>
                           
     
        
                
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

</div>
 <br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/>
        </>
    )
}

export default Seller_profile;