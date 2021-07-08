import React, {useState} from 'react';
import { required } from 'yargs';
import useForm from '../../hooks/useForm';

function ApplicationFormPage() {

    const { form, onChange, cleanFields } = useForm({
        trips: "",
        name: "",
        age: "",
        applicationText: "",
        country: "",
        profession: ""
      })

    const onSubmitApplication = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!", form);
        cleanFields();
    }

    return (
        <div>
            <form onSubmit={onSubmitApplication}>
                <input 
                name="profession" 
                placeholder="profissão" 
                type="text" 
                value={form.profession} 
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
                pattern={"^.{3,}"}
                title={"Seu nome deve ter no mínimo 3 caracteres"}
                required
                />
                <input 
                name="age" 
                placeholder="Idade" 
                type="number" 
                value={form.age} 
                onChange={onChange}
                min={18}
                title={"Sua idade não pode ser inferior a 18 anos"}
                required
                />
                <input 
                name="applicationText" 
                placeholder="Digite aqui" 
                type="text" 
                value={form.applicationText} 
                onChange={onChange}
                pattern={"^.{30,}"}
                title={"Mínimo 30 caracteres"}
                required
                />
                <input 
                name="country" 
                placeholder="País" 
                type="text" 
                value={form.country} 
                onChange={onChange}
                required
                />
            </form>
        </div>
    )
}

export default ApplicationFormPage
