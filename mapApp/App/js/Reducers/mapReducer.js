import constants from '../constants/constants'

const initialState = {
    mapInstance: null,
    pointList: [],
    multiRoute: null
}


const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.MAP_INITIALIZED: {
            return Object.assign({}, state, { mapInstance: action.map, multiRoute: action.multiRoute })
        }   
        case constants.POINT_ADDED: {
            return Object.assign({}, state, { pointList: state.pointList.concat({ address: action.pointAddress, id: action.id  }) })
        }   
        case constants.LAST_ROUTE_ADDED: {
            return Object.assign({}, state, { multiRoute: action.multiRoute })
        }  
        case constants.UPDATE_ADDRESS_ORDER: {
            return Object.assign({}, state, { pointList: action.pointList })
        }
        default: return state;
    }
}

export default mapReducer;