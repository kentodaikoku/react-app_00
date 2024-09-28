import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const showMessage = useMessage();

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      showMessage({title: "User acquisition failed", status: "error"});
    } finally {
      setLoading(false);
    }
  }, [showMessage]);

  return {loading, users, getUsers};
}