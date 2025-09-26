import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleCadastro = () => {
        if(!email || !password) {
            setMessage('Preencha todos os campos');
            return;
        }

        const existingUser = JSON.parse(localStorage.getItem('users')) || [];
        if (existingUser.some(user => user.email === email)) {
            setMessage('Já existe um usuário com esse email');
            return;
        }

        const newUser = { nome, email, password };
        existingUser.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUser));

        setMessage('Cadastro realizado com sucesso!');
        setTimeout(() => {navigate('/inicio')}, 1000);
        setNome('');
        setEmail('');
        setPassword('');
    }

    // O localStorage armazena dados no formato de string, então usamos JSON.stringify() para transformar o objeto em string antes de armazenar.
    // O localStorage.getItem('users') recupera todos os usuários cadastrados, e o JSON.parse() converte de volta de uma string JSON para um array.

    return(
        <>
            <Header title={"CADASTRO"}/>
            <div className="container-cad_log">
                <div className="input-container">
                    <p>Nome:</p>
                    <input type="text" id="inNome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="input-container">
                    <p>Email:</p>
                    <input type="email" id="inEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <p>Senha:</p>
                    <input type="password" id="inPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {/* <div className="input-container">
                    <p>Repita sua senha:</p>
                    <input type="password" id="" />
                </div> */}
                <button onClick={handleCadastro}>Cadastrar</button>
                <Link to={"/"} style={{color: "#124580", textDecoration: 'none'}}>Fazer login</Link>
                {message && <p>{message}</p>}
            </div>
        </>
    )
}

export default Cadastro;