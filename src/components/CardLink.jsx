import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSpotify, faSteam } from "@fortawesome/free-brands-svg-icons";

const CardLink = ({ socialType, socialLink }) => {
    return(
        <>  
            <a href={socialLink} className="card_link" target="_blank" rel="noopener noreferrer">
                {
                    socialType == 'Instagram' ? <FontAwesomeIcon icon={faInstagram} className="icon_link"/> : socialType == 'Facebook' ? <FontAwesomeIcon icon={faFacebook} className="icon_link"/> : socialType == 'Spotify' ? <FontAwesomeIcon icon={faSpotify} className="icon_link"/> : socialType == 'Steam' ? <FontAwesomeIcon icon={faSteam} className="icon_link"/> : ''
                }
                <h3>{socialType}</h3>
            </a>
        </>
    );
}

export default CardLink;