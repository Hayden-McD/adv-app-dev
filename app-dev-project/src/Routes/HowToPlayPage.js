import React from "react";
import { auth } from "../firebase";


const HowToPlayPage = () => {
  const user = auth.currentUser
  if (user) {
    return (
      <div>HowToPlayPage</div>
    )
  }
}

export default HowToPlayPage