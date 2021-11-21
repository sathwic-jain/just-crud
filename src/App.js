import Button from '@mui/material/Button';
import './App.css';
import { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { pink,green,purple } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';



function App() {
  const sample=[{fname:`Chamber`,lname:`D`,email:`deadeye@valo.hub`,Country:`France`,Phone:`+11111111`}];
   const[users,setusers]=useState(sample);
   const [fname,setfname]=useState("");
   const [lname,setlname]=useState("");
   const [email,setemail]=useState("");
   const [Country,setCountry]=useState("");
   const [number,setNum]=useState("")
   const [indx,setIndx]=useState(null);
   var element;
   var userCopy=[...users];
  return(
    <div>
      <AppBar position="static">
   <h2 style={{textAlign:"center"}}>Users</h2>
    </AppBar>
    <div className="body">
      <div className="sidebar">
        
        <ul className="sidelist">
          <li className="input">
          <TextField   label="First name" fullWidth variant="outlined" size="small" value={fname} onChange={(event)=>setfname(event.target.value)}/>
          </li>
         <li className="input">
          <TextField  label="Last name" fullWidth variant="outlined" size="small" value={lname} onChange={(event)=>setlname(event.target.value)}/>
          </li>
          <li className="input">
          <TextField  label="Email-id" fullWidth variant="outlined" size="small" value={email} onChange={(event)=>setemail(event.target.value)}/>
          </li>
          <li className="input">
          <TextField  label="Country" fullWidth variant="outlined" size="small" value={Country} onChange={(event)=>setCountry(event.target.value)}/>
          </li>
          <li className="input">
          <TextField  label="Phone number with code" fullWidth variant="outlined"size="small"  value={number} onChange={(event)=>setNum(event.target.value)}/>
          </li>
        </ul>
        <div class="addbuttondiv">
        <Button variant="text" onClick={()=>{
          if(`${fname}`!=="" || `${lname}`!=="" || `${email}`!=="" || `${Country}`!==""){
          element={fname:`${fname}`,lname:`${lname}`,email:`${email}`,Country:`${Country}`,Phone:`${number}`};
          if(indx===null)userCopy.push(element);
          else userCopy[indx]=element;
          setusers(userCopy); 
          setfname("");
          setlname("");
          setemail("");
          setCountry("");
          setNum("");
          }
          else alert("Kindly enter the inputs")
          setIndx(null);
        }}><AddCircleOutlineIcon sx={{ color: green[500] }}/></Button>
        </div>
      </div>
      <hr/>
      <div className="userTable">
        <h3 style={{textAlign:'center'}}>User List</h3>
        <Carddata users={users} setusers={setusers} setIndx={setIndx} setfname={setfname} setlname={setlname} setemail={setemail} setCountry={setCountry} setNum={setNum}/>
        </div>
      </div>

      <div className="endline">
        <p>Created by Mr.Sathwic for Guvi task-29</p>
      </div>
    </div>

    
  )
}


function Carddata({users,setusers,setIndx,setfname,setlname,setemail,setCountry,setNum}){
 var userCopy;
  return(
    <div className="cardbody">
    {users.map((each,index)=>(
      
      <div className="eachcard">
        <Card>
        <div className="details">
        <h2><PersonIcon sx={{ color: purple[300] }}/>{each.fname} {each.lname}</h2>
        <span><EmailIcon color="disabled"/> {each.email}</span>
        <p><HomeIcon color="disabled"/> {each.Country}</p>
        <p><PhoneIcon color="disabled"/> {each.Phone}</p>
        </div>
        <div className="buttons">
        <Button variant="text" onClick={
          ()=>{setIndx(index)
         setfname(users[index].fname);
      setlname(users[index].lname);
      setemail(users[index].email);
      setCountry(users[index].Country);
      setNum(users[index].Phone);
        }}><EditIcon/></Button>
        <Button variant="text" onClick={()=>{
          setIndx(index);
          userCopy=users.filter((ele,idx)=>index!==idx);
          setusers(userCopy);
        }}><DeleteOutlineOutlinedIcon sx={{ color: pink[500] }}/></Button>
        </div>
        </Card>
        </div>
        
    ))}
    </div>
  )
    
}
export default App;
