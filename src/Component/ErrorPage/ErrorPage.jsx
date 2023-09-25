import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oopps!!This page is not available</h2>
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;