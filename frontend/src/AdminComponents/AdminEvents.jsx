import { useEffect, useState } from "react"
import axios from "axios"; // Import axios
import { Navigate, useNavigate } from "react-router-dom";


function AdminEvents() {
    const [events, setEvents] = useState([])
    const Navigate = useNavigate    
    if(localStorage.getItem('token') == null)
    {
        return    <div className="alert alert-danger p-4 m-4" role="alert">
        <center className="p-5 m-5">
            <h1>You are Not Authorized Admin</h1>
            <h4>Please Login or Register to get Access </h4>
            <div className="">
            <button className="btn btn-dark  p-2 m-2" onClick={() => {
                Navigate('/admin/login')
            }}>
                Login
            </button>
            <button className="btn btn-dark  p-2 m-2"onClick={() => {
                Navigate('/admin/register')
            }}>
                Register
            </button>
            </div>
        </center>
    </div>

    }
    useEffect(() => {
        axios.get("http://localhost:5100/admin/getEvents").then((res1) => {
            setEvents(res1.data.events)
        }).catch((error1) => {
            alert("You are Not Authorixed Person")
        })
    }, [])


    return (
        <div className="container">
        <div className="row">
            {events.map((event, index) => (
                <div className="col-md-4 p-3 " key={index}>
                    <div className="card text-center">
                        <div className="card-header">
                        {event.eteacher}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{event.ename}</h5>
                            <p className="card-text">{event.edesc}</p>
                            <a href="#" className="btn btn-primary">View Event</a>
                            <a href="#" className="btn btn-danger">Delete Event</a>
                        </div>
                        <div className="card-footer text-muted">
                            {event.eduration}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default AdminEvents;