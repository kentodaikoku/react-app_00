import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom"
import { useMessage } from "./useMessage"

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading Setting
  const showMessage = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);

    // JSON Placeholder　 // REF; async/awaitの記述
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        showMessage({title: "Login Success", status: 'success'});
        navigate("/home");
      } else {
        showMessage({title: "Login Unsuccess: No user found", status: 'error'});
      }
    }).catch((error) => {
      console.error(`Login Error: ${error}`);
      showMessage({title: "Login Error", status: 'error'});
    }).finally(() => setLoading(false));

  }, [navigate, showMessage]);

  return {login, loading};
}