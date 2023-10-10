import React from "react";
import { useSelector } from "react-redux";

const CountVal = () => {
  const countState = useSelector((state) => {
    return state.count.data;
  });
  return <div>{countState}</div>;
};

export default CountVal;
