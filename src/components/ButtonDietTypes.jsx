import { useState } from "react";
import DietTypeResp from "./DietTypeResp";

const ButtonDietTypes = ({ dType, onClickChange, tipo }) => {
    const [dietResultClass, setDietResultClass] = useState('disabled');
    const [dietActive, setDietActive] = useState(false);
    const [dietTypeValue, setDietTypeValue] = useState('');

    const toggleDiet = () => {
        if (!dietActive) {
            setDietActive(!dietActive);
            setDietResultClass('active');
        } else {
            setDietActive(!dietActive);
            setDietResultClass('disabled');
        }

        if (dType === 'Sem deficiência') {
            setDietTypeValue('Alimentos sem deficiência nutritiva');
        } else if (dType === 'Diabetes') {
            setDietTypeValue('Alimentos para diabéticos');
        } else if (dType === 'Hipotireoidismo') {
            setDietTypeValue('Alimentos para hipertireóidicos');
        }
    }

    

    return (
        <>
            <button onClick={toggleDiet}>{ dType }</button>

            <DietTypeResp classActive={dietResultClass} onClick={toggleDiet} dType={dType} values={dietTypeValue} tipo={tipo}/>
        </>
    )
}

export default ButtonDietTypes;