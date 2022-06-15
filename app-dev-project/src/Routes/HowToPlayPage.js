import LoadingPage from './LoadingPage';
import { useAuth } from "../Components/AuthContext";
import { useHistory } from "react-router-dom";
import { loggedin_allowed, routes } from "./routePaths";

const HowToPlayPage = () => {
  const { loggedIn } = useAuth();
  const history = useHistory();

  return (
    loggedIn && loggedin_allowed.includes(history.location.pathname) ? <div>HowToPlayPage</div> : history.replace(routes.LOGIN)
  )
}

export default HowToPlayPage