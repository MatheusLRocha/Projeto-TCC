import Header from "../components/Header";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email || !password) {
            setMessage('Preencha todos os campos');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            navigate('/inicio');
        } else {
            setMessage('Email ou senha incorretos');
        }
    }

    return(
        <>
            <Header title={"LOGIN"}/>
            <div className="container-cad_log">
                <div className="input-container">
                    <p>Email:</p>
                    <input type="email" id="inEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <p>Senha:</p>
                    <input type="password" id="inPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleLogin}>Entrar</button>
                <Link to={"/cadastro"}>Não tenho uma conta</Link>
                {message && <p>{message}</p>}
            </div>
        </>
    )
}

export default Login;