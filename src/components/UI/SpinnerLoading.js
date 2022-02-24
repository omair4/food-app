import { Spinner } from "react-bootstrap"
const SpinnerLoading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center text-center not-found-container">
        <div>
      <Spinner
        className=" d-flex align-items-center justify-content-center text-center not-found-container"
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            </div>
    );
     
}
export default SpinnerLoading