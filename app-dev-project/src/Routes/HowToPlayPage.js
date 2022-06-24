import React from "react";
import { auth } from "../firebase";


const HowToPlayPage = () => {
  const user = auth.currentUser

  if (user) {
    return (
      <div>HowToPlayPage</div>
    )
  } else {
    //redirect
  }
}

export default HowToPlayPage