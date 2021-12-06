

  import React from "react";
import axios from "axios";

export default function Testing() {
  const [uploadFile, setUploadFile] = React.useState();
  
  const submitForm = (event) => {

	console.warn('******************')
	console.warn(uploadFile)
    event.preventDefault();

    const dataArray = new FormData();
	dataArray.append("name", 'aasasa');
	dataArray.append("price", 787);
	dataArray.append("type", 'type');
	dataArray.append("quantity", 8);
	dataArray.append("image_path", uploadFile);
	dataArray.append("seller_id", 15);

    axios
      .post("https://e-market-rest-api.herokuapp.com/product/register/", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        // error response
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        
        <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}