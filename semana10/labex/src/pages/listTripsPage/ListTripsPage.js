import React from 'react';
import {useHistory} from "react-router-dom";

function ListTripsPage() {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationPage = () => {
        history.push("/trips/application")
    }
    return (
        <div>
            <button onClick={goToHomePage}>Home</button>
            <button onClick={goToApplicationPage}>Formulário</button>

        </div>
    )
}

export default ListTripsPage
