import { useContext, useEffect } from "react";
import { api } from "@services/api";
import { UsersContext } from "../contexts/users";

type User = {
  id: string;
  login: string;
}

type UseUsersReturn = {
  users: User[]
}

export const useUsers = (): UseUsersReturn => {
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