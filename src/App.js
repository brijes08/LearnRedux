import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import leadsAction from "./redux/actions/leads.action";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TestData from "./components/TestData";
import SubTest from "./components/sub-comp/SubTest";
import Count from "./components/count/Count";
import CountVal from "./components/count-data/CountVal";


function App() {
  const dispatch = useDispatch();
  const leadsState = useSelector((state) => {
    return state.leads;
  });
  React.useEffect(() => {
    dispatch(leadsAction.leads());
  }, []);
  console.log("leadsState", leadsState);
  return (
    <>
    <div>
      <CountVal/>
    </div>
      <Routes>
        <Route path="/test-data" element={<TestData />} />
        <Route path="/sub-test" element={<SubTest />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </>
  );
}

export default App;
