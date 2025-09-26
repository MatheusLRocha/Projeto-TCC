import ButtonSup from "../components/ButtonSup";
import Header from "../components/Header";

const Suplementos = () => {
    return(
        <>
            <Header title={"SUPLEMENTOS"} iconH={"hamburguer"}/>
            <div className="main-suplement">
                <ButtonSup tipo={"Whey Protein"} cName={"btnSuplement"}/>
                <ButtonSup tipo={"Creatina"} cName={"btnSuplement"}/>
                <ButtonSup tipo={"Pré-Treino"} cName={"btnSuplement"}/>
                <ButtonSup tipo={"Multivitamínico"} cName={"btnSuplement"}/>
            </div>
        </>
    );
}

export default Suplementos;