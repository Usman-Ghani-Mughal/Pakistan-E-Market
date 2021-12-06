import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Header from './Header';

const Add_product = () => {
  const history = useHistory();

	const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    const [image_path, setImage_path] = useState("");
const submit=(event)=>{
  event.preventDefault();
  console.warn('*********************************')

console.warn(name)
console.warn(type)

console.warn(price)
console.warn(quantity)
console.warn(image_path)


  const dataArray = new FormData();
        
  dataArray.append("name", name);
  dataArray.append("price", price);
  dataArray.append("type", type);
  dataArray.append("quantity", quantity);
  dataArray.append("description", description);
  dataArray.append("image_path", image_path);
  dataArray.append("seller_id", localStorage.getItem('seller_id'));
  console.warn('**********************')
  console.warn(localStorage.getItem('seller_id'))


console.warn(dataArray)
  

  
  axios.post("https://e-market-rest-api.herokuapp.com/product/register/", dataArray, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  .then((response) => {
      if (response.status == 200) {
              history.push('/seller_profile')
           }
  })
  .catch((error) => {
      alert("Add Again")
     history.push('/add_product')
  });

}



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
        <input type="text" id="defaultFormRegisterNameEx" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx"  className="grey-text">
          Type
        </label>
        <input type="texet" id="defaultFormRegisterEmailEx" value={type} onChange={(e) => setType(e.target.value)} className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Price
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
        <br />
		<label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Quantity
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control" />
		<br />
    <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Description
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
		<br />
		<label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Image
        </label>
		<input id="defaultFormRegisterConfirmEx"
          type="file"
          onChange={(e) => setImage_path(e.target.files[0])} className="form-control"
        />

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

export default Add_product;