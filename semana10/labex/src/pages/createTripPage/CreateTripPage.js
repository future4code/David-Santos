import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import useForm from '../../hooks/useForm';

const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
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
      console.log("Formulário enviado!", form);
      cleanFields();
  }

    return (
      <div>
        <form onSubmit={onSubmitTrip}>
          <input 
                name="planet" 
                placeholder="Planeta" 
                type="text" 
                value={form.planet} 
                onChange={onChange}
                pattern={"^.{10,}"}
                title={"Mínimo de 10 caracteres"}
                required
                />
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
                type="text" 
                value={form.durationInDays} 
                onChange={onChange}
                min={50}
                title={"Minimo de 50 caracteres"}
                required
                />
                <input 
                name="date" 
                placeholder="Data" 
                type="date" 
                value={form.date} 
                onChange={onChange}
                required
                />
        <button>Entrar</button>
      </form>
  </div>
    )
}

export default CreateTripPage
