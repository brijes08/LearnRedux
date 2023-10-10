import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import leadsAction from '../../redux/actions/leads.action';

const SubTest = () => {
    const dispatch = useDispatch();
    const leadsState = useSelector((state) => {
      return state.leads;
    });
    React.useEffect(() => {
      dispatch(leadsAction.leads());
    }, []);
    console.log(leadsState)
  return (
    <div>
        {leadsState&&leadsState.data.map((data,i)=>{
        return (
            <div key={i}>
                {data.name}
            </div>
        )
      })}
    </div>
  )
}

export default SubTest
