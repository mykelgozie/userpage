import React from "react";
import Switch from "react-switch";
import { IoSearchOutline } from "react-icons/io5";



function Topheader (props){

    return (

        <div className="sub-header">
            <div className="title">
                <h1>{props.gender}</h1>
                <p>Filter by</p>
            </div>
           
            <div className="input-field">   
                <div className="input">
                    <input placeholder="Find List"/>
                    <span className ="sub-search">
                    <IoSearchOutline/>
                    </span>
                </div>
                <div className ="select">
                    <select className="country">
                        <option>
                            Country
                        </option>
                    </select>
                </div>
                <div  className="switch">
                    <Switch
            
                onColor="#30BBB5"        
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={48}
                className="react-switch"
                id="material-switch"
            />


            
                </div>
             </div>   
        </div>
    )
}

export default Topheader