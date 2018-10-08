// src/js/components/App.js
import React, { Component } from "react";
import FormContainer from "./FormContainer";
import Map from "./Map";
import { Link, Route } from 'react-router-dom';

class App extends Component {


    render() {
        return (<div className="main">
            <FormContainer />
            <Map />
        </div>)
    }
}
   



export default App;


