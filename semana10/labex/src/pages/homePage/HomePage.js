import React from 'react';
import { useHistory } from "react-router-dom";

function HomePage() {

    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/trips/list")
    };

    const goToAdminLogin = () => {
        history.push("/login")
    };

    return (
        <div>
            <button onClick={goToTripsPage}>Viagens</button>
            <button onClick={goToAdminLogin}>Area Admin</button>
        </div>
    )
}

export default HomePage
