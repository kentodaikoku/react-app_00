import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading Setting

  const login = useCallback((id: string) => {
    setLoading(true);

    // JSON Placeholder　 // REF; async/awaitの記述
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        navigate("/home");
      } else {
        alert("No User found");
      }
    }).catch((error) => {
      console.error(`Login Error: ${error}`);
      alert("There is an error");
    }).finally(() => setLoading(false));
  }, [navigate])

  return {login, loading};
}