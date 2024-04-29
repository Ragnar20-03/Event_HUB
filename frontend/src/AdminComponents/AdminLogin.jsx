import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    function onSubmitHandler() {
        axios.post("http://localhost:5100/admin/login", {
            username: username,
            password: password
        })
        .then((res1) => {
            console.log("Response from server of login component is: ", res1);
            localStorage.setItem('token', res1.data.token);
            alert("Login Succesful")
            navigate('/admin/events');
        })
        .catch((err1) => {
            if (err1.response.status === 404) {
                alert("Account Not Found! Please Register");
            } else if (err1.response.status === 400) {
                alert("Password Not Matched");
            }
        });
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <div className="login-form p-4 rounded shadow" style={{ backgroundColor: 'black', color: 'white', maxWidth: '700px' }}>
                <div className="form-group">
                <h4 className='text-success'>
                Login 
              </h4>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <br />
                <button className="btn btn-success " onClick={onSubmitHandler}>Login</button>
            </div>
        </div>
    );
}

export default Login;
