import DietItem from "../components/DietItem";
import Header from "../components/Header";

const Dieta = () => {
    

    return(
        <>
            <Header title={"DICAS DE DIETA"} iconH={"hamburguer"}/>  
            <main className="main-dieta">
                <DietItem tipo={'Mgorda'}  />
                <DietItem tipo={'Mmagra'} />
            </main>
        </>
    );
}

export default Dieta;