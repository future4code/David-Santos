import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import useForm from '../../hooks/useForm';
import styled from 'styled-components';
import fundo from "../../img/fundo.jpg"

const Main = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${fundo});
    width: 100vw;
    height: 100vh;

`
const Content = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2{
        color: white
    }

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;

    input, select{
        height: 30px;
        text-align: center;
    }

    button{
        height: 30px;
        border-radius: 7px;
        border: 1px solid black
    }
    `


function LoginPage() {
    const history = useHistory();
    
    const { form, onChange, cleanFields } = useForm({
      email: "",
      password: ""
    })

    const onSubmitLogin = (event) => {
      event.preventDefault();

        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/login",
            form
          )
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push("/admin/trips/list");
          })
          .catch((error) => {
            alert("Tente Novamente!");
          });

          cleanFields();
      };

    return (
        <Main>
          <Content>
              <h2>Login admin</h2>
              <Form onSubmit={onSubmitLogin}>
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
                <input 
                name="password"
                placeholder="Digite sua senha"
                type="password"
                value={form.password}
                onChange={onChange}
                required
                />
                <button>Entrar</button>
              </Form>
          </Content>
        </Main>
    )
}

export default LoginPage
