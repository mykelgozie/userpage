import logo from './logo.svg';
import './App.css';
import { FaUsers } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import Topheader from "./component/Topheader"
import Usertemplate from './component/Usertemplate';
import Userdetail from './component/Userdetail';
import Alluser from './component/Alluser';
import { IoSearchOutline } from "react-icons/io5";
import Footer from './component/Footer';
import { useEffect, useState } from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";



function App() {

  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("All Users");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [footer, setFooter] = useState(false);

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let numPages =  Math.ceil(users.length / itemsPerPage);

  let currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);


  function changefooter(value){

    setFooter(value);
  }






    useEffect(()=>{

     fetch("https://randomuser.me/api/?results=10").then((response)=>{
        return response.json();
     }).then( (data)=>{
        setUsers(data.results);
     });
      
    }, []);

    function Allusers(){

      setGender("All Users");
      fetch("https://randomuser.me/api/?results=10").then((response)=>{
        return response.json();
     }).then( (data)=>{
        setUsers(data.results);
     });

      
  
    }

    function Setfemale(){

      setGender("Female Users");
    
  
      fetch("https://randomuser.me/api/?results=10").then((response)=>{
        return response.json();
     }).then( (data)=>{
      var allFemale =  data.results.filter((item) =>{ 
        return item.gender == "female" }
  
        );

        setUsers(allFemale);


     });


    }

    function NextPage(){


    
 
      const pageNumber = 1;
    

      if(currentPage < numPages){
        setCurrentPage(currentPage + 1);

        currentUsers =  users.slice(indexOfFirstItem, indexOfLastItem);
     

      }  


    } 
    function PrevoiusPage(){

      if(currentPage <= numPages && currentPage != 1 ){
        setCurrentPage(currentPage - 1);

        currentUsers =  users.slice(indexOfFirstItem, indexOfLastItem);
      

      }  
    }



    function Setmale(){

 
      setGender("Male Users");
    
      fetch("https://randomuser.me/api/?results=10").then((response)=>{
        return response.json();
     }).then( (data)=>{

      var allMale =  data.results.filter((item) =>{ 
        return item.gender == "male" }
  
        );
  
       
        setUsers(allMale);


     });
      
    }

  
   console.log(footer);
        
  let greater =   footer ? "greaterthan-disable":"greaterthan"
  let lesser =  footer ? "lessthan-disable" :  "lessthan" 
   
  return (


    <div className="body" >

      <div className="left-card">
          <div className="main-header">
            <div className="header">
                Hello, <span className="name"> Emerald</span>
            </div>
             <div className="sub-header">
               Welcome to your dashboard kindly sort through the user base 
            </div>
          </div> 
          <div className="header-input">
             <  input placeholder ="Find user"  />
             <span className="search-user">
               <IoSearchOutline size="7%"/>
             </span>
          </div>
          
          <div className="gender">  
            <p>
              Show Users 
            </p>
            <div className="gender-icon">

              <div className="icon">
                <span className="users" >
                  <FaUsers  size={30} onClick= {() => { Allusers() }}/> 
                </span>
                <p>users</p>
              </div>
              <div  className="icon" >
                  <span className="male">
                    <FaMale size={30} onClick= {() => { Setmale() }}/> 
                  </span>
                  <p>Male</p>
              </div>
              <div  className="icon">
                <span className="female">
                  <FaFemale  size={30}  onClick= {() => { Setfemale() }}/> 
                </span>
                <p>Female</p>
              </div>
              
            </div>
         
           
          </div>
      </div>
      <div className="right-card">
   
          <Topheader gender={gender}/>
     
         
            <Alluser users ={currentUsers} foot={changefooter}/> 
          {/* <Userdetail/> */}

          <div className="footer">
                <div className="download">
                    <span><BsCloudDownload size="20px" /></span>
                     Donwload Results
                </div>
                <div className="pagination">
                  
                  
                    <span onClick = {() => PrevoiusPage()} className={lesser}>
                        <FaLessThan/>
                    </span>
                    <span onClick ={() => NextPage()}  className={greater}>
                        <FaGreaterThan/>
                    </span>

                </div>
            </div>
      </div>

     
    
    </div>
  );
}

export default App;
