import { React, useState  } from "react";
import Userdetail from "./Userdetail";
import   Usertemplate from "./Usertemplate";


function Alluser(props){

     console.log(props.users);
     const [word , setWord] = useState(false);
     const [person, setPerson] = useState({});

     function changepage(value){
  
        setWord(value);
        props.foot(value);

        
   

     }

    function detailperson(user){

     

     setPerson(user);     
     }

   

    if(word){

        

      
        return (

           <Userdetail data={person} userpage ={changepage} />
        )


    } else {

        return (

            props.users.map ( user =>                
                <Usertemplate userdetail ={user} userpage ={changepage} detailuser={detailperson}  />
                )
        )

    }
     
    



}

export default Alluser;