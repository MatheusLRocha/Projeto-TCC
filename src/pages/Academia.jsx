import ButtonES from "../components/ButtonES";
import Header from "../components/Header";

const Academia = () => {
    return(
        <>
            <Header title={"EXERCÍCIOS ACADEMIA"} iconH={"hamburguer"}/>  
            <div className="main-exercise">
                <ButtonES tipo={"Peito"} amb={'academia'} cName={"btnExercise"}/>
                <ButtonES tipo={"Ombro"} amb={'academia'} cName={"btnExercise"}/>
                <ButtonES tipo={"Costa"} amb={'academia'} cName={"btnExercise"}/>
                <ButtonES tipo={"Braço"} amb={'academia'} cName={"btnExercise"}/>
                <ButtonES tipo={"Perna"} amb={'academia'} cName={"btnExercise"}/>
            </div>
        </>
    );
}

export default Academia;