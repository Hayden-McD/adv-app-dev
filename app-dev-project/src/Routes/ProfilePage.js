import React from "react";
import { useAuth } from "../Components/AuthContext";
import LoadingPage from "./LoadingPage";

const ProfilePage = () => {
  const { loggedIn } = useAuth();

  return (
    loggedIn ? <div>ProfilePage</div> : <LoadingPage />
  )

}

export default ProfilePage;