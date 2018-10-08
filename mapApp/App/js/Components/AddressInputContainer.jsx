import React, { Component }  from "react";
import { connect } from "react-redux";
import constants from '../constants/constants';
import AddressInput from './AddressInput';


class AddressInputContainer extends Component {  
    render() {
        return (
            <div className="addressInputContainer">
                <AddressInput></AddressInput>
            </div>   
        )
    }
}





export default AddressInputContainer;