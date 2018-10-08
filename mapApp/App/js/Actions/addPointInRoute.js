import constants from "../Constants/constants";


export const addPointToRoute = (pointAddress, id) => {

    return {
        type: constants.POINT_ADDED,
        pointAddress: pointAddress,
        id: id

    }
} 