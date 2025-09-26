import ButtonES from "../components/ButtonES";
import Header from "../components/Header";

const Casa = () => {
    return(
        <>
            <Header title={"EXERCÍCIOS CASA"} iconH={"hamburguer"}/>  
            <div className="main-exercise">
                <ButtonES tipo={"Peito"} amb={'casa'} cName={"btnExercise"}/>
                <ButtonES tipo={"Ombro"} amb={'casa'} cName={"btnExercise"}/>
                <ButtonES tipo={"Costa"} amb={'casa'} cName={"btnExercise"}/>
                <ButtonES tipo={"Braço"} amb={'casa'} cName={"btnExercise"}/>
                <ButtonES tipo={"Perna"} amb={'casa'} cName={"btnExercise"}/>
            </div>
        </>
    );
}

export default Casa;