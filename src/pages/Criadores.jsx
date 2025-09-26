import Header from "../components/Header";
import Player from "../components/Player";
import criadores from "../data/criadoresData";

const Criadores = () => {
    return(
        <>
            <Header title={"CRIADORES"} iconH={"hamburguer"}/>
            <main className="main-criadores">
                {
                    criadores.map((criador) => (
                        <Player name={criador.nome} id={criador.id} fotoRosto={criador.fotos.fotoPerfilReal}/>
                    ))
                }
            </main>
        </>
    );
}

export default Criadores;