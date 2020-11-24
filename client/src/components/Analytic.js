import React, { Component } from 'react';
import axios from "axios";
import Line from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Analytic extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            initial:new Date().setHours(6,30,0,0),
            final:new Date().setHours(6,30,0,0)
        }
    }

    componentDidMount=()=>{
        axios.get("http://192.168.0.106:5000/getContact")
        .then(res=>{
            var obj={};
            obj["color"]="steelblue";
            var arr=[];
            for(var i=this.state.initial/1000;i<=this.state.final/1000;i+=86400){
                var arrObj={
                    x:new Date(i*1000).getDate(),
                    y:res.data.filter(data=>new Date(data.date)/1000==i).length
                };
                arr.push(arrObj);
            }
            obj["points"]=arr;
            var local=[];
            local.push(obj);
            this.setState({data:local});
        }).catch(err=>{
            console.log(err);
        })
    }

    loadGraph=()=>{
        axios.get("http://192.168.0.106:5000/getContact")
        .then(res=>{
            console.log(new Date(res.data[0].date));
            var obj={};
            obj["color"]="steelblue";
            var arr=[];
            for(var i=this.state.initial/1000;i<=this.state.final/1000;i+=86400){
                var arrObj={
                    x:new Date(i*1000).getDate(),
                    y:res.data.filter(data=>new Date(data.date)/1000==i).length
                };
                arr.push(arrObj);
            }
            obj["points"]=arr;
            var local=[];
            local.push(obj);
            this.setState({data:local});
            console.log(this.state.data)
        }).catch(err=>{
            console.log(err);
        })   
    }

    render(){
        return(
            <div>
                <div style={{textAlign:"center",marginTop:"2%"}}>
                    <span style={{marginRight:20}}>
                        <label style={{marginRight:5}}>Initial:</label>
                        <DatePicker selected={this.state.initial} onChange={date => {this.setState({initial:date.setHours(6,30,0,0)}),this.loadGraph()}} />
                    </span>
                    <span>
                        <label style={{marginRight:5}}>Final:</label>
                        <DatePicker selected={this.state.final} onChange={date => {this.setState({final:date.setHours(6,30,0,0)}),this.loadGraph()}} />
                    </span>
                </div>
                <div style={{textAlign:"center"}}>
                    <Line 
                        width={600}
                        height={400}
                        xLabel="Date"
                        yLabel="Enquiries received"
                        data={this.state.data}
                    />
                </div>
            </div>
        )
    }
}