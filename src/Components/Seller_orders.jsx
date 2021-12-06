import React ,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Header from "./Header";
import sdata from './sdata';
import axios from "axios";
import Edit_product from './Edit_product';


const Seller_orders = () => {
    const history=useHistory();


    const [users,setUsers]=useState([]);

    const add=()=>{

        history.push("/add_product");
    }
    const sid=localStorage.getItem('seller_id')
    async function getData(){
      
        const res=await axios.get('https://e-market-rest-api.herokuapp.com/seller/orders?id='+sid)
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
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><b>Orders that you have receive</b>
        </h5>
        
         

    
      </div>


      
<div class="container-fluid">

<div class="card shadow mb-4">
 

  <div class="card-body">

    <div class="table-responsive">

      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>Product id</th>
            <th>Buyer id</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Order Description</th>
            <th>Order Date</th>
            
            
          </tr>
        </thead>
        <tbody>
        {
    users.map((val)=>{
    return  (
        <>
            <tr>
    
                <td>{val.product_id}</td>
                <td>{val.buyer_id} </td>
                <td>{val.quantity} </td>
                <td>{val.amount} </td>
                <td>{val.order_description}   </td>
                <td>{val.order_date} </td>


                
              
                           
     
        
                
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

export default Seller_orders;