import Header from "./Header";

const ExercResp = ({ classActive, results, onClick }) => {
    return(
        <>
             <div className={`exerc-resp ${classActive}`}>
                <Header title={'RESULTADO'} iconH={'exit'} onClickToggle={onClick}/>
                <section>
                    {
                        // results.map((elemento, i) => (
                        //     <h3 key={i}>{elemento}</h3>
                        // ))

                        results.map((exercicio, index) => (
                            <h4 key={index}>{exercicio}</h4>
                        ))
                    }
                </section>
            </div>
        </>
    );
}

export default ExercResp;