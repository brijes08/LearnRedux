import { LEADS } from "../types";

export const leads = (data)=>{
    return {
        type: LEADS.FETCH,
        payload: data
    }
}
export const leadsSuccess = (data)=>{
    return {
        type: LEADS.SUCCESS,
        payload: data
    }
}
export const leadsError= (data)=>{
    return {
        type: LEADS.ERROR,
        payload: data
    }
}
export const leadsReset= (data)=>{
    return {
        type: LEADS.RESET,
        payload: data
    }
}
const leadsAction = {
    leads,
    leadsSuccess,
    leadsError,
    leadsReset
}
export default leadsAction