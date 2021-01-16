import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaTabletAlt } from "react-icons/fa";


function Userdetail(props){

    function Goback(){

        props.userpage(false);
    }

    let regDate = new Date(props.data.registered.date).toLocaleDateString().split('/').reverse().join('-');

    return (

        <div  className="detail">

            <div className="icon-arrow" onClick={()=>Goback()}> 
                <span> <FaArrowLeft/> </span>RESULTS
            </div>
            <div className="user-data">

                <div className ="user-detail">
                    <img src={props.data.picture.large} width="80%"/>
                </div>
                <div className="detail-div">
                    <h2>{props.data.name.title}. {props.data.name.first} {props.data.name.last}<span>  { props.data.dob.age }</span></h2>
                    <span>
                        {props.data.location.street.number},        
                        {" "} {props.data.location.street.name}, 
                        {" "}  {props.data.location.city},  
                        {" "} {props.data.location.state}
                    </span>

                     <div>
           
                         <p className="email"> 
                             <span className="icon"><FaRegEnvelope/></span>{props.data.email}
                        </p>
                        
                    
                    
                       <p className="joined">JOINED: {regDate }</p>
                    
                
                        <p >
                            <span className="icon">
                              <FiPhoneCall/>
                            </span>
                           {props.data.phone}
                        </p>
                    
                    
                        <p className="">
                         <span className="icon">
                             <FaTabletAlt/>
                         </span>   
                         {props.data.cell}
                        </p>
                    </div>
                </div>
            

            </div>
        </div>
    )


}


export default Userdetail;