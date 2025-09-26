import Header from "../components/Header";
import CalculatorItem from "../components/CalculatorItem";
import { useState, useEffect } from "react";
import CalcResp from "../components/CalcResp";

const Imc = () => {
    // No próximo protótipo eu vou melhorar a questão de receber respostas no useState, pois ele é assíncrono então eu preciso aprender a usar ele para mostrar respostas
    
    const [respClass, setRespClass] = useState('disabled');
    const [respActive, setRespActive] = useState(false);

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [imc, setImc] = useState('');
    const [saude, setSaude] = useState('');
    const [allResp, setAllResp] = useState([]);

    useEffect(() => {
        setAllResp([`IMC: ${imc}`, `Você está: ${saude}`]);
    }, [imc, saude]);

    const calcular = () => {
        let valorImc = peso / (altura * altura);
        let imcCalculado = valorImc.toFixed(2);
    
        let statusSaude = '';
        if (valorImc < 18.5) {
           statusSaude = 'Muito magro';
        } else if (valorImc >= 18 && valorImc <= 24.9) {
            statusSaude = 'Saudável';
        } else if (valorImc >= 25 && valorImc <= 29.9) {
            statusSaude = 'Com Sobrepeso';
        } else if (valorImc >= 30 && valorImc <= 34.9) {
            statusSaude = 'Com Obesidade Grau 1';
        } else if (valorImc >= 35 && valorImc <= 39.9) {
            statusSaude = 'Com Obesidade Grau 2';
        } else if (valorImc > 40) {
            statusSaude = 'Com Obesidade Grau 3';
        }

        setImc(imcCalculado);
        setSaude(statusSaude);
        // setAllResp([`IMC: ${imcCalculado}`, `Você está: ${statusSaude}`]);
    }
    
    const toggleResp = () => {
        if (!peso || !altura || !idade) {
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
            <Header title={"CALCULADORA IMC"} iconH={"hamburguer"}/>     
            <main className="main-calculator">
                <CalculatorItem label={"Peso(kg)"} step={0.01} element={"input"} value={peso} onChange={e => setPeso(Number(e.target.value))}/>
                <CalculatorItem label={"Altura(m)"} step={0.01} element={"input"} value={altura} onChange={e => setAltura(Number(e.target.value))}/>
                <CalculatorItem label={"Idade"} step={1} element={"input"} value={idade} onChange={e => setIdade(Number(e.target.value))}/>
                <CalculatorItem label={"Sexo"} element={"select"} idS={"slSexo"} value={sexo} onChange={e => setSexo(e.target.value)}/>
                <button className="btnCalc" onClick={toggleResp}>Calcular</button>
            </main>  

            <CalcResp classActive={respClass} results={allResp} onClick={toggleResp}/>
        </>
    );
}

export default Imc;