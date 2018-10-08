import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import constants from '../constants/constants';
import AddressInputContainer from "./AddressInputContainer";
import AddressList from "./AddressList";



const FormContainer = () => {
    return (
        <div className="formContainer">
            <AddressInputContainer />
            <AddressList />
        </div>
            )    
};



export default FormContainer;