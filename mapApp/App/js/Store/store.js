import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index"; 
import thunk from 'redux-thunk';

const persistedState = () => {
    try {
        var pointList = localStorage.getItem("pointList");
        if (pointList == null) {
            return undefined;
        }
        return {
            map: {
                pointList: JSON.parse(pointList)             
            }
        };
    }
    catch(err){
        return undefined;
    }
}



const store = createStore(
    rootReducer,
    persistedState(),
    applyMiddleware(thunk)
);

store.subscribe(() => {
    try {
        localStorage.setItem("pointList", JSON.stringify(store.getState().map.pointList))
    }
    catch (err) {

    }
   
})


export default store;