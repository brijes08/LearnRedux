import { COUNT } from "../types";

const initialState = {data:0};

const countReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case COUNT.UPDATE_COUNT:{
            const {data} = payload
            return {
                data:payload
            }
        }
        default:{
            return state
        }
    }
}
export default countReducer