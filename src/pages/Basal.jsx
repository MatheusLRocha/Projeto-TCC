import Header from "../components/Header";
import CalculatorItem from "../components/CalculatorItem";
import { useState, useEffect } from "react";
import CalcResp from "../components/CalcResp";

const Basal = () => {
    const [respClass, setRespClass] = useState('disabled');
    const [respActive, setRespActive] = useState(false);

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [esforco, setEsforco] = useState('');
    const [tmb, setTmb] = useState('');
    const [tmt, setTmt] = useState('');
    const [allResp, setAllResp] = useState([]);

    useEffect(() => {
        setAllResp([`Taxa Metabólica Basal: ${tmb}`, `Taxa Metabólica Total: ${tmt}`]);
    }, [tmb, tmt]);

    const calcular = () => {
        let taxaTmb = 0;
        let taxaTmt = 0;

        if (sexo === 'Masculino') {
            taxaTmb = (13.75 * peso) + (5 * altura) - (6.75 * idade) + 66.5;
        } else {
            taxaTmb = (9.56 * peso) + (1.85 * altura) - (4.68 * idade) + 65.71;
        }

        taxaTmt = taxaTmb * esforco;

        setTmb(taxaTmb.toFixed(2));
        setTmt(taxaTmt.toFixed(2));
        // setAllResp([`Taxa Metabólica Basal: ${taxaTmb}`, `Taxa Metabólica Total: ${taxaTmt}`]);
    }
 
    const toggleResp = () => {
        if (peso.length === 0 || altura.length === 0 || idade.length === 0) {
            alert('Coloque todos os valores corretamente antes de calcular!');
            return;
        }

        // React é assíncrono, useStates são assíncronos. Dito isso, o setTimeout serve para "dar um tempo" suficiente para o React carregar os states com seus valores atualizados
        setTimeout(() => {
            calcular();

            if (!respActive) {
                setRespActive(!respActive);
                setRespClass('active');
            } else {
                setRespActive(!respActive);
                setRespClass('disabled');
            }
        }, 0);

        
    }

    return(
        <>
            <Header title={"CALCULADORA BASAL"} iconH={"hamburguer"}/>
            <main className="main-calculator">
                <CalculatorItem label={"Peso(kg)"} step={0.01} element={"input"} value={peso} onChange={e => setPeso(Number(e.target.value))}/>
                <CalculatorItem label={"Altura(cm)"} step={1} element={"input"} value={altura} onChange={e => setAltura(Number(e.target.value))}/>
                <CalculatorItem label={"Idade"} step={1} element={"input"} value={idade} onChange={e => setIdade(Number(e.target.value))}/>
                <CalculatorItem label={"Sexo"} element={"select"} idS={"slSexo"} value={sexo} onChange={e => setSexo(e.target.value)}/>
                <CalculatorItem label={"Esforço Físico"} element={"select"} idS={"slEsforco"} value={esforco} onChange={e => setEsforco(Number(e.target.value))}/>
                <button className="btnCalc" onClick={toggleResp}>Calcular</button>
            </main>

            <CalcResp classActive={respClass} results={allResp} onClick={toggleResp}/>
        </>
    );
}

export default Basal;