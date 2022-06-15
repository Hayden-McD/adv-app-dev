import LoadingPage from './LoadingPage';
import { useAuth } from "../Components/AuthContext";

const HowToPlayPage = () => {
  const { loggedIn } = useAuth();

  return (
    loggedIn ? <div>HowToPlayPage</div> : <LoadingPage />
  )
}

export default HowToPlayPage