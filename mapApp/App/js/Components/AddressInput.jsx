import React, { Component }  from "react";
import { connect } from "react-redux";
import constants from '../constants/constants';
import { addPointToRoute } from '../Actions/addPointInRoute';



class AddressInput extends Component {  
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };      

    }


    addPoint(e) {
        if (e.key === 'Enter') {

            const getId = () => {
                if (this.props.pointList.length == 0) return 0;

                var pointListIds = this.props.pointList.map((value) => { return value.id });
                return Math.max(...pointListIds) + 1;
                
            };

            this.props.addPointToRoute(this.state.inputValue, getId());
        }       
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value })
    }


    render() {
        return (
            <div className="inputWrapper">
                <input type="text" className="addressInput" placeholder="Enter a waypoint" value={this.state.inputValue} onChange={(e) => { this.handleChange(e) }} onKeyDown={(e) => { this.addPoint(e) }} />
            </div>
        )
    }
}

const mapStateToProps = ({ map }) => {
    return {        
        pointList: map.pointList 
    };
};



export default connect(mapStateToProps, { addPointToRoute })(AddressInput);