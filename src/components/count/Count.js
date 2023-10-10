import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import countAction from '../../redux/actions/count.action'
const Count = () => {
    const dispatch = useDispatch();
    
    const countState = useSelector((state) => {
      return state.count.data;
    });

const addCount = ()=>{
    dispatch(countAction.updateCount(countState+1));
}
    console.log(countState)
  return (
    <div>
        <button onClick={addCount}>Add</button>
    </div>
  )
}

export default Count