import React, {useState} from 'react';
import {Header} from "../styles"

function ApplicationFormPage() {
    const [trips, setTrips] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(1);
    const [applicationText, setApplicationText] = useState("");
    const [country, setCountry] = useState ([]);

    const onChangeTrips = (e) => {
        setTrips(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onChangeApplication = (e) => {
        setApplicationText(e.target.value)
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    return (
        <div>
            <form>
                <label>
                    Escolha uma viagem:
                    <input placeholder="Escolha uma viagem" type="text" value={trips} onChange={onChangeTrips}/>
                </label>
                <label>
                    Nome:
                    <input placeholder="Nome" type="text" value={name} onChange={onChangeName}/>
                </label>
                <label>
                    Idade:
                    <input placeholder="Idade" type="text" value={age} onChange={onChangeAge}/>
                </label>
                <label>
                    Texto para candidatura:
                    <input placeholder="Digite aqui" type="text" value={applicationText} onChange={onChangeApplication}/>
                </label>
                <label>
                    País:
                    <input placeholder="País" type="text" value={country} onChange={onChangeCountry}/>
                </label>
            </form>
        </div>
    )
}

export default ApplicationFormPage
