import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import useForm from '../../hooks/useForm';
import axios from "axios";
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
    height: 550px;
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
    height: 400px;

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

const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        alert("Não está logado!!!");
        history.push("/login");
      }
    }, []);
  };

function CreateTripPage() {

    useProtectedPage()

    const { form, onChange, cleanFields } = useForm({
      id: "",
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: ""
    })

  const onSubmitTrip = (event) => {
      event.preventDefault();

      const body = { 
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays
       }
      const token = localStorage.getItem('token')
      const header = {
          headers: {
              auth: token
          }
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/trips", body, header)

          .then((response) => {

              alert("Viagem criada com sucesso!")
              cleanFields()


          })
          .catch((error) => {
              alert("Tente Novamente")

          })
      cleanFields();
  }

    return (
      <Main>
          <Content>
          <h2>Nova Viagem</h2>
            <Form onSubmit={onSubmitTrip}>
                  <select 
                  name="planet" 
                  placeholder="Planeta" 
                  type="text" 
                  value={form.planet} 
                  onChange={onChange}
                  required>
                    <option value="" disabled selected>Escolha um planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Júpiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                  </select>
                  <input 
                    name="name" 
                    placeholder="Nome" 
                    type="text" 
                    value={form.name} 
                    onChange={onChange}
                    pattern={"^.{5,}"}
                    title={"Seu nome deve ter no mínimo 5 caracteres"}
                    required
                    />
                    <input 
                    name="description" 
                    placeholder="Descrição" 
                    type="text" 
                    value={form.description} 
                    onChange={onChange}
                    min={30}
                    title={"Minimo de 30 caracteres"}
                    required
                    />
                    <input 
                    name="durationInDays" 
                    placeholder="Duração em dias" 
                    type="number" 
                    value={form.durationInDays} 
                    onChange={onChange}
                    required
                    />
                    <input 
                    name="date"
                    type="date" 
                    value={form.date} 
                    onChange={onChange}
                    required
                    />
            <button>Adicionar</button>
          </Form>
      </Content>
  </Main>
    )
}

export default CreateTripPage
