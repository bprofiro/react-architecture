import { useEffect } from "react";
import { api } from "../../infrastructure/http/api";
import { resetUsers, setUsers } from "../../infrastructure/store/slices/users";
import { useReduxDispatch } from "./useReduxDispatch";
import { useReduxSelector } from "./useReduxSelector";

export const useUsers = () => {
  const dispatch = useReduxDispatch()
  const users = useReduxSelector(state => state.users.value)

  useEffect (() => {
    async function getUsers() {
      const response = await api.get('/users');

      dispatch(setUsers(response.data))
    }

    getUsers();

    return () => {
      dispatch(resetUsers())
    }
  }, [dispatch]);

  return {
    users
  }
}