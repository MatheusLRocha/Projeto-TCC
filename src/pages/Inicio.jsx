import Header from "../components/Header";
import NavigateButton from "../components/NavigateButton";

const Inicio = () => {
    return(
        <>
            <Header title={"INÍCIO"} iconH={"usuario"}/>  
           
            <main className="main-container">
                <NavigateButton title={"Calculadora Basal"} path={"/basal"}/>
                <NavigateButton title={"Calculadora IMC"} path={"/imc"}/>
                <NavigateButton title={"Dicas de Dieta"} path={"/dieta"}/>
                <NavigateButton title={"Exercícios em Casa"} path={"/casa"}/>
                <NavigateButton title={"Exercícios na Academia"} path={"/academia"}/>
                <NavigateButton title={"Suplementos"} path={"/suplementos"}/>
                <NavigateButton title={"Criadores"} path={"/criadores"}/>
            </main>
        </>
    );
}

export default Inicio;