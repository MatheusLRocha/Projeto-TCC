import Header from "./Header";

const SupResp = ({ classActive, results, onClick }) => {
    console.log(results);
    return(
        <>
             <div className={`sup-resp ${classActive}`}>
                <Header title={'RESULTADO'} iconH={'exit'} onClickToggle={onClick}/>
                <section>
                    {
                       <>
                            <div>
                                <h2>{results.nome}</h2>
                                <p>{results.texto}</p>
                                <h3>Dicas de {results.nome}:</h3>
                            </div>
                            <article>
                                {
                                    results.referencias.map((referencia, index) => (
                                        <div className="sup-item">
                                            <img src={referencia.imagem} alt={`Imagem ${results.nome} ${index}`}/>
                                            <a href={referencia.link} key={index} target="_blank" rel="noopener noreferrer" >
                                                <button className="btnSup upDown">Clique aqui!</button>
                                            </a>
                                        </div>
                                    ))
                                }
                            </article>

                       </>
                    }
                </section>
            </div>
        </>
    );
}

export default SupResp;