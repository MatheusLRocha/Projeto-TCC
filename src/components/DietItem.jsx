import { useState } from "react";
import DietTypes from "./DietTypes";

const DietItem = ({ tipo }) => {
    const [dietResultClass, setDietResultClass] = useState('disabled');
    const [dietActive, setDietActive] = useState(false);

    const toggleDiet = () => {
        if (!dietActive) {
            setDietActive(!dietActive);
            setDietResultClass('active');
        } else {
            setDietActive(!dietActive);
            setDietResultClass('disabled');
        }
    }

    return(
        <>
            <button className={`diet-button diet-${tipo}`} onClick={toggleDiet}>
                {tipo === 'Mgorda' ? ('Dicas para Perder Massa Gorda') : ('Dicas para Ganhar Massa Magra')}    
            </button> 

            <DietTypes classActive={dietResultClass} onClick={toggleDiet} tipo={tipo}/>
        </>
    );
}

export default DietItem;