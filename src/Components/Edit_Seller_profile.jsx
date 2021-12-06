import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Header from './Header';

const Edit_Seller_profile = (props) => {
 
  const history = useHistory();

	const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");

    const [shop_name, setShop_name] = useState("");
    const [shop_type, setShop_type] = useState("");
    const [shop_details, setShop_detials] = useState("");


const submit=(event)=>{
  event.preventDefault();
  console.warn('*********************************')


const seller_id=localStorage.getItem('seller_id')
 
  
const dataArray = {name:name,email:email,password:password,address:address,city:city,phone:phone,gender:gender,seller_id:seller_id,shop_details:shop_details,shop_name:shop_name,shop_type:shop_type}

  
  axios.post("https://e-market-rest-api.herokuapp.com/seller/updateprofile/", dataArray, {
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
     history.push('/edit_seller')
  });

}

return (
  <>
  <Header/>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
    
      <form>
        <p className="h4 text-center mb-4">Edit Profile</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder={localStorage.getItem('name')} />
        <br />
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Email
        </label>
        <input type="text" id="defaultFormRegisterNameEx" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder={localStorage.getItem('name')} />
        <br />
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Password
        </label>
        <input type="password" id="defaultFormRegisterNameEx" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder={localStorage.getItem('name')} />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx"  className="grey-text">
          Phone
        </label>
        <input type="texet" id="defaultFormRegisterEmailEx" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder={localStorage.getItem('type')} />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Address
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder={localStorage.getItem('price')} />
        <br />
		<label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          City
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" placeholder={localStorage.getItem('quantity')}/>
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Gender
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={gender} onChange={(e) => setGender(e.target.value)} className="form-control" />
		<br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Shop Name
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={shop_name} onChange={(e) => setShop_name(e.target.value)} className="form-control" />
		<br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Shop Type
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={shop_type} onChange={(e) => setShop_type(e.target.value)} className="form-control" />
		<br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Shop Details
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" value={shop_details} onChange={(e) => setShop_detials(e.target.value)} className="form-control" />
		<br />
        
        <div className="text-center mt-4">
          {/* <MDBBtn color="unique" type="submit" onClick={submit}>
            Register
          </MDBBtn> */}
          <button type="submit" onClick={submit} value="submit" className="btn_3">
                                     Update
                                 </button>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</>
);
};

export default Edit_Seller_profile;