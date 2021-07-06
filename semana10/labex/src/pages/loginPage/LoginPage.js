import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


function LoginPage() {
    const history = useHistory();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <form>
                <label>
                    Email:
                    <input placeholder="Digite seu email" type="text" value={email} onChange={onChangeEmail}/>
                </label>
                <label>
                    Senha:
                    <input placeholder="Digite sua senha" type="password" value={password} onChange={onChangePassword}/>
                </label>
            </form>
            <button onClick={goToAdminHomePage}>Entrar</button>
        </div>
    )
}

export default LoginPage
