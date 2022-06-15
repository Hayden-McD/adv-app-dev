import LoadingPage from './LoadingPage';
import { useAuth } from "../Components/AuthContext";
import { useHistory } from "react-router-dom";
import { routes } from "./routePaths";

const HowToPlayPage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  if(!loggedIn) {
    history.replace(routes.LOGIN)
  }
  return (
    loggedIn ? <div>HowToPlayPage</div> : <LoadingPage />
  )
}

export default HowToPlayPage