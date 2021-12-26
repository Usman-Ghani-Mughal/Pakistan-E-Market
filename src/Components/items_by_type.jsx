
import React ,{useState,useEffect} from 'react';
import '../index.css';
import axios from 'axios'; 
import Card from './Card';
import swal from 'sweetalert';
import Header from './Header';
import sdata from './sdata';


const Items_by_type = (props)=> {  

    const [users,setUsers]=useState([]);

    async function getData(){
    const type = props.type;
    console.log("------------ > "+ type);
    console.log('https://e-market-rest-api.herokuapp.com/product/type?type='+type);

    axios.get('https://e-market-rest-api.herokuapp.com/product/type?type='+type)
      .then((response) => {
        if (response.status == 200) {
                console.log(response.data.data);
                 setUsers(response.data.data);
             }
    })
    .catch((error) => {
      swal("Pakistan Local E-Market",error.response.data.Error, "error");
    });
        
}
    useEffect(()=>{
        // get data
        getData();
    },[]); 

    return (
    <>
    <Header/>
<section class="ftco-section">
    	<div class="container">
				<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <h2 class="mb-4">{props.type}</h2>
            <p>You can see {props.type} here, to buy them just click on buy</p>
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

export default Items_by_type;