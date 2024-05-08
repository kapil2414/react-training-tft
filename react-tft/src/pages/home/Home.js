import { Link, useLocation } from "react-router-dom";
import  "./Home.scss"
import { PAGE_ROUTES } from "../../utils/constants";

const Home = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state);

    return (
        <div className="container">
            {state && state.username ? (
                <h1>Welcome, {state.username}</h1>
            ) : (
                <div className="container">
                    <h1>This is the home page</h1>
                    <Link to={PAGE_ROUTES.LOGIN}>Navigate to Login page</Link>
                </div>
            )}
        </ div>
    )
}

export default Home;

