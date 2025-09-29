import { useEffect, useState } from "react";
import DietTypeRespCard from "./DietTypeRespCard";
import Header from "./Header";

const DietTypeResp = ({ classActive, onClick, dType, values, tipo }) => {
    const [alimentos, setAlimentos] = useState([{
        nome: '',
        calorias: '',
        proteinas: '',
        carboidratos: '',
        gorduras: '',
    }]);

    useEffect(() => {
        if (dType === 'Sem deficiência' && tipo === 'Mgorda') {
        setAlimentos([
            {
                nome: 'Couve-Flor',
                calorias: '12',
                proteinas: '1.1',
                carboidratos: '2.3',
                gorduras: '0.1',
            },
            {
                nome: 'Arroz Integral',
                calorias: '62',
                proteinas: '1.3',
                carboidratos: '13.1',
                gorduras: '0.5',
            },
            {
                nome: 'Aveia',
                calorias: '190',
                proteinas: '6.8',
                carboidratos: '32.8',
                gorduras: '3.5',
            },
            {
                nome: 'Morango',
                calorias: '16',
                proteinas: '0.3',
                carboidratos: '3.7',
                gorduras: '0.1',
            },
            {
                nome: 'Ovo',
                calorias: '78',
                proteinas: '6.5',
                carboidratos: '0.6',
                gorduras: '5.3',
            }
        ]);
        } else if (dType === 'Diabetes' && tipo === 'Mgorda') {
            setAlimentos([
                {
                    nome: 'Alface',
                    calorias: '12',
                    proteinas: '1.1',
                    carboidratos: '2.3',
                    gorduras: '0.1',
                },
                {
                    nome: 'Arroz Integral',
                    calorias: '62',
                    proteinas: '1.3',
                    carboidratos: '13.1',
                    gorduras: '0.5',
                },
                {
                    nome: 'Frango',
                    calorias: '82',
                    proteinas: '15.5',
                    carboidratos: '0',
                    gorduras: '1.8',
                },
                {
                    nome: 'Morango',
                    calorias: '16',
                    proteinas: '0.3',
                    carboidratos: '3.7',
                    gorduras: '0.1',
                },
                {
                    nome: 'Ovo',
                    calorias: '78',
                    proteinas: '6.5',
                    carboidratos: '0.6',
                    gorduras: '5.3',
                }
            ]);
        } else if (dType === 'Hipotireoidismo' && tipo === 'Mgorda') {
            setAlimentos([
                {
                    nome: 'Leite Integral',
                    calorias: '31',
                    proteinas: '1.5',
                    carboidratos: '2.4',
                    gorduras: '1.7',
                },
                {
                    nome: 'Castanhas',
                    calorias: '325',
                    proteinas: '6.6',
                    carboidratos: '9.2',
                    gorduras: '31',
                },
                {
                    nome: 'Cenoura',
                    calorias: '20',
                    proteinas: '0.5',
                    carboidratos: '4.6',
                    gorduras: '0.1',
                },
                {
                    nome: 'Morango',
                    calorias: '16',
                    proteinas: '0.3',
                    carboidratos: '3.7',
                    gorduras: '0.1',
                },
                {
                    nome: 'Ovo',
                    calorias: '78',
                    proteinas: '6.5',
                    carboidratos: '0.6',
                    gorduras: '5.3',
                }
            ]);
        } else if (dType === 'Sem deficiência' && tipo === 'Mmagra') {
            setAlimentos([
                {
                    nome: 'Leite Integral',
                    calorias: '31',
                    proteinas: '1.5',
                    carboidratos: '2.4',
                    gorduras: '1.7',
                },
                {
                    nome: 'Frango',
                    calorias: '82',
                    proteinas: '15.5',
                    carboidratos: '0',
                    gorduras: '1.8',
                },
                {
                    nome: 'Abacate',
                    calorias: '80',
                    proteinas: '1.0',
                    carboidratos: '4.2',
                    gorduras: '7.4',
                },
                {
                    nome: 'Feijão',
                    calorias: '70',
                    proteinas: '4.5',
                    carboidratos: '12.0',
                    gorduras: '0.4',
                },
                {
                    nome: 'Ovo',
                    calorias: '78',
                    proteinas: '6.5',
                    carboidratos: '0.6',
                    gorduras: '5.3',
                }
            ]);
        } else if (dType === 'Diabetes' && tipo === 'Mmagra') {
            setAlimentos([
                {
                    nome: 'Arroz Integral',
                    calorias: '62',
                    proteinas: '1.3',
                    carboidratos: '13.1',
                    gorduras: '0.5',
                },
                {
                    nome: 'Frango',
                    calorias: '82',
                    proteinas: '15.5',
                    carboidratos: '0',
                    gorduras: '1.8',
                },
                {
                    nome: 'Feijão',
                    calorias: '70',
                    proteinas: '4.5',
                    carboidratos: '12.0',
                    gorduras: '0.4',
                },
                {
                    nome: 'Morango',
                    calorias: '16',
                    proteinas: '0.3',
                    carboidratos: '3.7',
                    gorduras: '0.1',
                },
                {
                    nome: 'Ovo',
                    calorias: '78',
                    proteinas: '6.5',
                    carboidratos: '0.6',
                    gorduras: '5.3',
                }
            ]);
        } else if (dType === 'Hipotireoidismo' && tipo === 'Mmagra') {
            setAlimentos([
                {
                    nome: 'Arroz Integral',
                    calorias: '62',
                    proteinas: '1.3',
                    carboidratos: '13.1',
                    gorduras: '0.5',
                },
                {
                    nome: 'Frango',
                    calorias: '82',
                    proteinas: '15.5',
                    carboidratos: '0',
                    gorduras: '1.8',
                },
                {
                    nome: 'Castanhas',
                    calorias: '325',
                    proteinas: '6.6',
                    carboidratos: '9.2',
                    gorduras: '31',
                },
                {
                    nome: 'Morango',
                    calorias: '16',
                    proteinas: '0.3',
                    carboidratos: '3.7',
                    gorduras: '0.1',
                },
                {
                    nome: 'Ovo',
                    calorias: '78',
                    proteinas: '6.5',
                    carboidratos: '0.6',
                    gorduras: '5.3',
                }
            ]);
        }
    }, [dType, tipo])

    return(
        <>
            <div className={`diet-resp ${classActive}`}>
                <Header title={dType.toUpperCase()} iconH={'exit'} onClickToggle={onClick}/>
                <article>
                    <p>{ values }</p>

                    <h3>Dicas de Alimentos:</h3>
                    <div className="alimentos">
                        <DietTypeRespCard alimentos={alimentos}/>
                    </div>
                </article>
            </div>
        </>
    )
}

export default DietTypeResp;