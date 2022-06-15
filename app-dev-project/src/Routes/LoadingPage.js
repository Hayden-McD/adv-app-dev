import CircleLoader from "react-spinners/CircleLoader";

const LoadingPage = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-div">
        <CircleLoader size={100} speedMultiplier={3} color={"#BD2100"} />
        <div>
          <h3 className="loading-text"> Loading... </h3>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
