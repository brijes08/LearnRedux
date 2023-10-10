import { COUNT } from "../types";

export const updateCount = (data)=>{
    return {
        type: COUNT.UPDATE_COUNT,
        payload: data
    }
}

const countAction = {
    updateCount,
}
export default countAction