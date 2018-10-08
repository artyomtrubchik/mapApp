import React, { Component }  from "react";
import { connect } from "react-redux";
import Comment  from "./Comment";
import { initMap } from "../Actions/initMap";
import constants from '../constants/constants';



class Map extends Component {  

    

    componentDidMount() {
        ymaps.ready(() => { return this.initMapComp() });  
    }

    initMapComp() {
        this.props.initMap();

        this.props.multiRoute.events.add('update', () => { 
            if (this.props.pointList.length > 1)
                 this.props.map.setBounds(this.props.multiRoute.getBounds());
        });
    }

    componentDidUpdate() {
        var addresses = this.props.pointList.map((item) => {
            return item.address;
        })

         this.props.multiRoute.model.setReferencePoints(addresses);  

    }


    render() {
        return (
            <div className="map" id="map"></div>   
        )
    }
}


const mapStateToProps = ({ map }) => {
    return {
        map: map.mapInstance,  
        pointList: map.pointList,
        multiRoute: map.multiRoute
    };
};


export default connect(mapStateToProps, { initMap })(Map);