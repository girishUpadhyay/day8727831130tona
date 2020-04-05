import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
import '../../assets/css/style.css'

export default class Scanner extends React.Component{

    constructor(props)
    {

        super(props)
    }

    render(){

        return(

            <button className="buttonStyleScan">Scan</button>
        )
    }
}