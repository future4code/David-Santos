import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from '../../hooks/useForm';


function LoginPage() {
    const history = useHistory();
    
    const { form, onChange, cleanFields } = useForm({
      email: "",
      password: ""
    })

    const onSubmitLogin = (event) => {
      event.preventDefault();
      console.log("Formulário enviado!", form);
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/login",
            form
          )
          .then((response) => {
            console.log("Deu certo: ", response.data.token);
            localStorage.setItem("token", response.data.token);
            history.push("/admin/trips/list");
          })
          .catch((error) => {
            console.log("Deu errado: ", error.response);
          });

          cleanFields();
      };

    return (
        <div>
            <form onSubmit={onSubmitLogin}>
              <input 
              name="email" 
              placeholder="Digite seu email" 
              type="email" 
              value={form.email} 
              onChange={onChange}
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
              title={"Exemplo: nome@email.com"}
              required
              />
              <input name="password"
              placeholder="Digite sua senha"
              type="password"
              value={form.password}
              onChange={onChange}
              required
              />
              <button>Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage
