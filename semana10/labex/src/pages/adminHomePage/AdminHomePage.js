import React from 'react'
import {useHistory} from "react-router-dom";

function AdminHomePage() {
    const history = useHistory();

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goToTrioDetailsPage = () => {
        history.push("/admin/trips/:id")
    }
    return (
        <div>
            <button onClick={goToCreateTripPage}>Nova viagem</button>
            <button onClick={goToTrioDetailsPage}>Detalhes</button>
        </div>
    )
}

export default AdminHomePage
