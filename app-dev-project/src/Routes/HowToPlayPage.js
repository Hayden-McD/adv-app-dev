import React from 'react'
import { useHistory } from "react-router-dom";

const HowToPlayPage = ({user}) => {
  const history = useHistory();

  if (!user) {
    return history.push("/login");
  } else {
    return (
    <div>HowToPlayPage</div>
    )}
}

export default HowToPlayPage