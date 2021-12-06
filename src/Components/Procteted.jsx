import React ,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const Protected=(props)=>
{
    const history=useHistory();
    let Cmp=props.component
    useEffect(()=>{
        if(localStorage.getItem('seller_id'))
        {
            history.push('./buyer_login')
        }
    })
    

    return(
        <>
        <Cmp/>

        </>
    )
}
export default Protected;