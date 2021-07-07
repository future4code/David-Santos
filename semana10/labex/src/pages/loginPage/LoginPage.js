import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";


function LoginPage() {
    const history = useHistory();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitLogin = () => {
        console.log(email, password);
        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/login",
            body
          )
          .then((response) => {
            console.log("Deu certo: ", response.data.token);
            localStorage.setItem("token", response.data.token);
            history.push("/admin/trips/list");
          })
          .catch((error) => {
            console.log("Deu errado: ", error.response);
          });
      };

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
            <button onClick={onSubmitLogin}>Entrar</button>
        </div>
    )
}

export default LoginPage
