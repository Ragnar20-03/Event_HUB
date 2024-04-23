import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function AdminLogin() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")


    const navigate = useNavigate()
    
    function onSubmitHandler () 
    {
        axios.post("http://localhost:5100/admin/login" , {
            username : username  , 
            password : password
        }).then((res1) => {
            console.log("Respionse from server of login component is  ; " ,res1);
            localStorage.setItem('token' , res1.data.token)
            navigate('/admin/events')

        }).catch((err1) => {
                if (err1.response.status == 404 )
                {
                    alert("account Not Found ! Please Register")

                }
                else if (err1.response.status == 400)
                {
                    alert("Password Not Matched")
                }
        })
    }

    return (
        <div>
            <h1>Admin Pannel</h1>
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

  <button class="btn btn-primary" onClick={() => {
   onSubmitHandler()
  }}>Login</button>    



</div>
    )
}

export default AdminLogin
