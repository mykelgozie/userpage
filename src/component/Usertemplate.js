import React, { useEffect, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";



function Usertemplate(props){

    // const [detailPage, setDetailPage] = useState(false);

    function Change(){

        let value = true;
        props.userpage(value);
        props.detailuser(props.userdetail);
        
       
    }





    return (

        <div>
            <div className="user-tag">          
               
                  <img src={props.userdetail.picture.large} width="12%" />
                                 
               
                <div className="img-body">
                    <h3>{props.userdetail.name.first} {props.userdetail.name.last} </h3>
                    <p className="address">{props.userdetail.location.street.number},        
                         {" "} {props.userdetail.location.street.name}, {" "} 
                    {props.userdetail.location.city},  {" "}
                    {props.userdetail.location.state}</p>
                    <p className="icon-tab">
                        <span className="user-icon"><FaRegEnvelope/></span>
                        <span className="user-info">{props.userdetail.email}</span> 
                        <span className="user-icon"><FiPhoneCall/></span>
                        <span className="user-info">011- {props.userdetail.phone}</span>
                        <div className= "direction" onClick={()=> Change(props.userdetail)} > <FaArrowRight/> </div>
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>


    )  

}


export default Usertemplate;