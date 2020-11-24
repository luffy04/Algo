import React, { Component } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import "./Contact.css";

// "JHA10MNX20PYSCHO"

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstName:"Anuj",
            lastName:"Jha",
            email:"aryanjha82.25@gmail.com",
            message:"contact",
        }
    }

    submit=()=>{
        console.log(new Date(new Date().setHours(12,0,0,0)).toISOString().slice(0,19));
        var data={
            firstName:this.state.firstName.trim(),
            lastName:this.state.lastName.trim(),
            email:this.state.email.trim(),
            message:this.state.message.trim(),
            date:new Date(new Date().setHours(12,0,0,0)).toISOString().slice(0,19).replace('T',' '),
        }
        axios.post("http://192.168.0.106:5000/send",{data})
        .then(res=>{
            NotificationManager.success("Success");
        }).catch(err=>{
            NotificationManager.error("Error");
            console.log(err)
        })
    }

    render() {
        return (
            <div className="Main">
                <h2>Contact Us Form</h2>
                <div style={{margin:"2% 0"}}>
                    <label>First Name</label>
                    <div>
                        <input type="text" value={this.state.firstName} placeholder="First Name" onChange={(e)=>this.setState({firstName:e.target.value})} />
                    </div>
                </div>
                <div style={{margin:"2% 0"}}>
                    <label>Last Name</label>
                    <div>
                        <input type="text" value={this.state.lastName} placeholder="Last Name" onChange={(e)=>this.setState({lastName:e.target.value})} />
                    </div>
                </div>
                <div style={{margin:"2% 0"}}>
                    <label>Email</label>
                    <div>
                        <input type="text" value={this.state.email} placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})} />
                    </div>
                </div>
                <div style={{margin:"2% 0"}}>
                    <label>Message</label>
                    <div>
                        <input type="text" style={{height:50}} value={this.state.message} placeholder="Message" onChange={(e)=>this.setState({message:e.target.value})} />
                    </div>
                </div>
                <div style={{margin:"3% 0"}}>
                    <button className="Submit" onClick={()=> this.submit()}>SUBMIT</button>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}



export default Contact;