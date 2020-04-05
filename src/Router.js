import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Corousel from './js/components/Corousel'
export default class RouterComponent extends React.Component {

    constructor(props) {

        super(props)
        this.state = {

            isAuthenticated: false,
            b: 20
        }
    }

    componentDidMount() {

        if (!this.state.isAuthenticated) {
            var a = localStorage.getItem("isAuthenticated")
            this.setState({
                isAuthenticated: a
            });
        }

    }

    render() {

        return (
            <Router>
                <Route exact path='/' component={Corousel}>

                </Route>
            </Router>
        )
    }
}