import { useEffect, useState } from "react"
import axios from "axios"; // Import axios


function Events() {
    const [events, setEvents] = useState([])

    
    if(localStorage.getItem('token') == null)
    {
        return <center className="p-5 m-5">
            <h1 className="">
            You are Not Authorized Person 
           
        </h1>
        <p>Please or login to access</p>
        </center>
    }
    useEffect(() => {
        axios.get("http://localhost:5100/user/getEvents").then((res1) => {
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
                            <a href="#" className="btn btn-primary">Enroll </a>
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

export default Events;