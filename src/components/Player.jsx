import { Link } from "react-router-dom";

const Player = ({ name, id, fotoRosto }) => {
    return(
        <Link to={`/criadores/${id}`} className="player-item">
            <div className="player">
                <img src={fotoRosto} alt="foto do rosto do criador" />
            </div>
            <h2>{ name }</h2>
        </Link>
    )
}

export default Player;