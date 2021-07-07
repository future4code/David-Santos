import React, {useEffect} from 'react'
import {useHistory} from "react-router-dom";

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

function AdminHomePage() {

    useProtectedPage();

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
