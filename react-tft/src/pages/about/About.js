import { Link } from "react-router-dom";
import "./About.scss"
import { PAGE_ROUTES } from "../../utils/constants";

const About = () => {

    return (
        <div className="container">
            <h1>This is the About page</h1>
            <Link to={PAGE_ROUTES.LOGIN}>Navigate to Login page</Link>
        </div>
    )
}

export default About;