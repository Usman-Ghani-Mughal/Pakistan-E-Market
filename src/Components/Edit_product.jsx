import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Header from './Header';

const Edit_product = (props) => {
 
  const history = useHistory();

	const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

const submit=(event)=>{
  event.preventDefault();
  console.warn('*********************************')

console.warn(name)
console.warn(type)

console.warn(price)
console.warn(quantity)

const seller_id=localStorage.getItem('seller_id')
 
  
const dataArray = {seller_id: seller_id, name: name,price:price,quantity:quantity,description:description,product_id:localStorage.getItem('pid'),type:type }

  
  axios.post("https://e-market-rest-api.herokuapp.com/product/updateproduct", dataArray, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
      if (response.status == 200) {
              history.push('/seller_profile')
           }
  })
  .catch((error) => {
      alert("Edit Again")
     history.push('/edit_product')
  });

}


// const [users,setUsers]=useState([]);

//    async function getData(){
        
//     const res=await axios.get('https://e-market-rest-api.herokuapp.com/product/')
//     console.warn('************test************')
//     console.warn(res.data.data.name)
    
//     setUsers(res.data.data);
//    console.warn('********************************image')
//    console.warn(users)

// }
//     useEffect(()=>{
      

//         getData();
//     },[]);  
//     console.warn(users)
return (
  <>
  <Header/>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
    
      <form>
        <p className="h4 text-center mb-4">Add product</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder={localStorage.getItem('name')} />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx"  className="grey-text">
          Type
        </label>
        <input type="texet" id="defaultFormRegisterEmailEx" value={type} onChange={(e) => setType(e.target.value)} className="form-control" placeholder={localStorage.getItem('type')} />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Price
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder={localStorage.getItem('price')} />
        <br />
		<label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Quantity
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder={localStorage.getItem('quantity')}/>
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Description
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
		<br />
        <div className="text-center mt-4">
          {/* <MDBBtn color="unique" type="submit" onClick={submit}>
            Register
          </MDBBtn> */}
          <button type="submit" onClick={submit} value="submit" className="btn_3">
                                     Add
                                 </button>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</>
);
};

export default Edit_product;