import constants from "../Constants/constants";

export const updateAddressOrder = (pointList) => {
    return {
        type: constants.UPDATE_ADDRESS_ORDER,
        pointList: pointList
    }
}