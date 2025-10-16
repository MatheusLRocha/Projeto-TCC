import { useParams } from "react-router-dom";
import Header from "../components/Header";
import criadores from "../data/criadoresData";
import CardLink from "../components/CardLink";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CriadorCard = () => {
  const { id } = useParams(); // Retorna o id da barra de pesquisa como string

  const criador = criadores.find((criador) => criador.id == id); // Verifica o valor do id da barra de pesquisa e pega o criador dos criadores referente ao id encontrado

  if (!criador) {
    return <p>Criador não encontrado!</p>;
  }

  return (
    <>
      <Header
        title={"CRIADOR"}
        iconH={"hamburguer"}
      />
      {/* {criador.customizacaoPagina.imagemFundo && (  
        <div
          className="imagem_fundo"
          style={{
            backgroundImage: `url(${criador.customizacaoPagina.imagemFundo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
          }}
        ></div>

        // Se 'criador.customizacaoPagina.imagemFundo' tiver uma imagem(for verdadeiro), ele renderiza a div com a imagem, senão, ele não renderiza essa div
      )} */}
      <div className="container_criador">
        <div className="criador">
          <Link to="/criadores" className="backCreatorsIcon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <div className="containerFotoPerfil">
            <div className="foto_perfil">
              <img
                src={criador.fotos.fotoPerfilQualquer}
                alt={`foto de perfil do criador ${criador.nome}`}
              />
            </div>
            <h1>
              {criador.nome}
            </h1>
          </div>
        </div>
        
        <div className="card_links" >
          {criador.redes.map((rede, index) => (
            <CardLink
              socialType={rede.tipo}
              socialLink={rede.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CriadorCard;
