
import React,{useState} from 'react'
import "./App.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const App = () => {
    const navigate=useNavigate()
    const [user,setuser]=useState({
        email:"",
        password:""
    })
   // const[error ,seterror]=useState(false)

    const alerterror=()=>{
        alert("Please fill all detail")
    }
    const adduser=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }

    const submituser =async()=>{
        if(user.email.length==0||user.password.length==0){
            alerterror()
        }
  else
    navigate("/test")
  

 }
  return (
    <>
    
<div className='container'>
<h1>Signup</h1>
<div className='inputboxesbutton'>
<div className='emailandpass'>
    <label>Email</label>
    <input style={{width:"100%"}} type="email" name="email" placeholder='enter your email...' onChange={(e)=>adduser(e)}/>
    <label>Password</label>
    <input   style={{width:"100%"}}type="password"  name="password" placeholder='enter your password...' onChange={(e)=>adduser(e)}/>
</div>
<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <button style={{width:"40%"}} onClick={()=>submituser()}>Register</button>
</div>

</div>

</div>


    </>
  )
}

export default App
