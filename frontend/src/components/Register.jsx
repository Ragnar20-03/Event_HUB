import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Register() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
const navigate = useNavigate()
    function onRegister()
    {
        axios.post("http://localhost:5100/user/register" , {
            username : username  , 
            password : password , 
            fname : "Shubham" , 
            lname : "Borse"
        }).then((res1) => {
            console.log("Respionse from server of login component is  ; " ,res1);
            alert("Registeration Succesfull !")
            navigate('/events')

        }).catch((err1) => {
                    alert("Account is Already Registered with this Usernaem !  please Login")
                    navigate('/login')
        })
    }
    return (
        <div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={(e) => {
     setUsername( e.target.value);
    }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e) => {
            setPassword(e.target.value)
    }} class="form-control" id="exampleInputPassword1" placeholder="Password" /> 
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button class="btn btn-primary" onClick={() => {
   onRegister()
  }}>Register</button>    



</div>
    )
}

export default Register
