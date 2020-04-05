import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import '../../assets/css/style.css'
export default class FeatureImage extends React.Component{

    constructor(props){

        super(props)

        this.state={

            featureDetails:[]
        }
    }

    componentDidMount(){

        var myId=localStorage.getItem("id")
        fetch("https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images?id="+myId)
        .then(res => res.json())
        .then(
            (result) => {

                this.setState({ featureDetails: result.features })

                console.log("Feature Result is ::", this.state.featureDetails.features)
            },
    )

        .catch(err => {
            console.log("The error code ", err)
        })
    }

    render(){

        return(
            <div className="colorDescription"> 
                
                <h2 style={{fontSize:"20px",marginLeft:"20px"}}>Features</h2>

            <ul>
                {this.state.featureDetails.map((value)=>{

                    return(
                        <li>
                            <span>{value}</span>
                        </li>
                    )
                })}
                
                </ul>
                </div>
                
        )
    }
}