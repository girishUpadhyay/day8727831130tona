import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';

export default class HeadingImage extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {

        return (

            <div style={{borderBottom:"4px solid #b1adad"}}>

            <h2 style={{fontSize:"20px"}}>Images</h2>

            </div>
        )
    }
}