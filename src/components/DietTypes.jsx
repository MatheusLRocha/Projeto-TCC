import ButtonDietTypes from "./ButtonDietTypes";
import Header from "./Header";
import { useState } from "react";

const DietTypes = ({ classActive, onClick, tipo }) => {
    

    return(
        <>
            <div className={`container-types ${classActive}`}>
                <Header title={'TIPOS'} iconH={'exit'} onClickToggle={onClick}/>
                <section>
                    <ButtonDietTypes dType='Sem deficiência' tipo={tipo}/>
                    <ButtonDietTypes dType='Diabetes' tipo={tipo}/>
                    <ButtonDietTypes dType='Hipotireoidismo' tipo={tipo}/>
                </section>
            </div>
        </>
    );
}

export default DietTypes;