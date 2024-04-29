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
      <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>

      <div className="login-form p-4 rounded shadow" style={{ backgroundColor: 'black', color: 'white', maxWidth: '700px' }}>
          <div className="form-group">
              <h4 className='text-success'>
                Register with us
              </h4>
              <br />
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              
          </div>
          <br />

          <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <br />
          <button className="btn btn-success " onClick={onRegister}>Login</button>
      </div>
  </div>    )
}

export default Register
