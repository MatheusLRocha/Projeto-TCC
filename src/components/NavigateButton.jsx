import { Link } from "react-router-dom";

const NavigateButton = ({ path, title }) => {
    return(
        <>
            <Link to={`${path}`}>
                <button>{title}</button>
            </Link>
        </>
    );
}

export default NavigateButton;