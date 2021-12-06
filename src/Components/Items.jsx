
import React ,{useState,useEffect} from 'react';
import '../index.css';
import axios from 'axios'; 
import Card from './Card';

import Header from './Header';
import sdata from './sdata';


const Items=()=>
{  
  


    const [users,setUsers]=useState([]);

   async function getData(){
        
    const res=await axios.get('https://e-market-rest-api.herokuapp.com/product/')
    console.warn('************test************')
    console.warn(res.data.data.name)
    
    setUsers(res.data.data);
   console.warn('********************************image')
   console.warn(users)

}
    useEffect(()=>{
      

        getData();
    },[]); 
     
    console.warn(users)

    return (
    <>
    <Header/>
<section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <h2 class="mb-4">Our Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>   		
    	</div>
    	<div class="container">
    		<div class="row">
                        {
    users.map((val)=>{
    return  (
        <>
       

        <Card
        product_id={val.id}
        imgsrc={val.image_path}
        title={val.name}
        type={val.type}
        seller_id={val.seller_id}
        price={val.price} 
        description={val.description} 
        />

                            



        </>
    
       )
    }
    )}                   
     
               
    </div>
    	</div>
    </section>
                 
    
    </>)
}

export default Items;