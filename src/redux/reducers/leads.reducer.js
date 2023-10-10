import { LEADS } from "../types";

const initialState = {data:null,loading:false,error:null};

const leadsReducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch(type){
        case LEADS.FETCH:{
            return {
                ...state,loading:true
            }
        }
        case LEADS.SUCCESS:{
            const {data} = payload
            return { 
                ...state,data:data,loading:false
            }
        }
        case LEADS.ERROR:{
            const {error} = payload
            return { 
                ...state,loading:false,error:error
            }
        }
        case LEADS.RESET:{
            return state
        }
        default:{
            return state
        }
    }
}
export default leadsReducer