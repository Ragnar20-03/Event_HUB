import { useEffect, useState } from "react"
import axios from "axios"; // Import axios
import { NavLink , Navigate, Router, useNavigate } from "react-router-dom";

function MyEvents() {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5100/user/getEnrollEvents").then((res1) => {
            console.log("res1 of myEvents is : " , res1.data.events);
            setEvents(  res1.data.events)

        }).catch((error1) => {
            return    <div className="alert alert-danger p-4 m-4" role="alert">
            <center className="p-5 m-5">
                <h1>You are Not Authorized Person</h1>
                <h3>Please Login or Register to get Access </h3>
                <div className="">
                <button className="btn btn-dark  p-2 m-2" onClick={() => {
                    navigate('/login')
                }}>
                    Login
                </button>
                <button className="btn btn-dark  p-2 m-2"onClick={() => {
                    navigate('/register')
                }}>
                    Register
                </button>
                </div>
            </center>
        </div>
        })
    }, [])

    if (localStorage.getItem('token') == null) {
        return    <div className="alert alert-danger p-4 m-4" role="alert">
        <center className="p-5 m-5">
            <h1>You are Not Authorized Person</h1>
            <h3>Please Login or Register to get Access </h3>
            <div className="">
            <button className="btn btn-dark  p-2 m-2" onClick={() => {
                navigate('/login')
            }}>
                Login
            </button>
            <button className="btn btn-dark  p-2 m-2"onClick={() => {
                navigate('/register')
            }}>
                Register
            </button>
            </div>
        </center>
    </div>
    }

    if (events.length == 0 )
    {
        return <div>
            You Havent Enrolled to Any Event
        </div>

    }


    return (
        <div className="container">
            <div className="row">
                {events.map((event, index) => (
                    <div className="col-md-4 p-3 " key={index}>
                        <div class="card text-center bg-light border-dark">
                            <div class="card-header text-white bg-dark">
                                {event.ehost} 
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-dark"> {event.ename}</h5>
                                <p class="card-text text-dark">{event.edesc}.</p>
                                {/* <a href="#" class="btn btn-primary text-white bg-dark border-light">View Event </a> */}
                            </div>
                            <div class="card-footer text-muted text-dark">
                                2 days ago
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default MyEvents;