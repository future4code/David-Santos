import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

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

function TripDetailsPage() {
    
    useProtectedPage();

    useEffect(() => {
      const token = localStorage.getItem("token");
      axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/trip/ZL92zHymPMtJ28AIh2r6",
          {
            headers: {
              auth: token
            }
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("Deu erro: ", error.response);
        });
    }, []);
    return (
        <div>
            hi
        </div>
    )
}

export default TripDetailsPage
