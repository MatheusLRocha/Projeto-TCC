import { Link } from "react-router-dom";

const NavigateButton = ({ path, title }) => {
    return(
        <>
            <Link to={`${path}`}>
                {title}
            </Link>
        </>
    );
}

export default NavigateButton;