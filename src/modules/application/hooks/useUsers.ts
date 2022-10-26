import { useContext, useEffect } from "react";
import { api } from "../../infrastructure/http/api";
import { UsersContext } from "../../infrastructure/store/contexts/users";

export const useUsers = () => {
  const context = useContext(UsersContext)

  if (!context) {
    throw new Error('useUsers must be used within an UsersProvider');
  }
  const { dispatch, users } = context;

  useEffect (() => {
    async function getUsers() {
      const response = await api.get('/users');

      dispatch({ type: "setUsers", payload: response.data })
    }

    getUsers();

    return () => {
      dispatch({type: "resetUsers", payload: []})
    }
  }, [dispatch]);

  return {
    users
  }
}