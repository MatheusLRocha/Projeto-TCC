import Header from "./Header";

const CalcResp = ({ classActive, results, onClick }) => {
    return(
        <>
            <div className={`calc-resp ${classActive}`}>
                <Header title={'RESULTADO'} iconH={'exit'} onClickToggle={onClick}/>
                <section>
                    {
                        results.map((elemento, i) => (
                            <h3 key={i}>{elemento}</h3>
                        ))
                    }
                </section>
            </div>
        </>
    );
}

export default CalcResp;