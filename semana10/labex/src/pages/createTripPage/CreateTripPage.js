import React, {useEffect} from 'react';
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

function CreateTripPage() {

    useProtectedPage()

    return (
        <div>
            hi
        </div>
    )
}

export default CreateTripPage
