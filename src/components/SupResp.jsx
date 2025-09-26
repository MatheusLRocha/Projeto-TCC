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
                            <h3>{results.nome}</h3>
                            <p>{results.texto}</p>
                            <article>
                                {
                                    results.referencias.map((referencia, index) => (
                                        <a href={referencia.link} key={index} target="_blank" rel="noopener noreferrer">
                                            <img src={referencia.imagem} alt={`Imagem ${results.nome} ${index}`}/>
                                        </a>
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