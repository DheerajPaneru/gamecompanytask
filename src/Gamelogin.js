
import React, { useState } from 'react'
import "./App.css"
import { useAuth } from './GameContext'
import { useNavigate} from 'react-router-dom'
const Gamelogin = () => {
  const navigate =useNavigate()
  const { authenticated, toggleAuth } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  return (


    <div className='bodysignup'>
  <section>
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span />
    <div className="signin">
      <div className="content">
        <h2>Sign In</h2>
        <div className="form">
          <div className="inputBox">
            <input type="text" required="" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} /> <i>Username</i>
          </div>
          <div className="inputBox">
            <input type="password" required="" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/> <i>Password</i>
          </div>
          <div className="inputBox" onClick={()=>{ 
            if(credentials.username.length>2)
            {
            navigate("/Gameabout")
            toggleAuth()
            }
            else{
              alert("please fill all field and password should me more than four character")

            }}}>
            <input type="submit" defaultValue="Login" />
          </div>
        </div>
      </div>
    </div>
  </section>{" "}
  {/* partial */}
    </div>
  )
}

export default Gamelogin