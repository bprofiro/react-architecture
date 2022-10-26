import { createContext } from 'react'

export type User = {
  login: string
  id: string
}

type UsersState = {
  users: User[]
}

export type UsersAction = {
  type: 'setUsers' | 'resetUsers'
  payload: User[]
}

export const usersReducer = (state: UsersState, action: UsersAction) => {
  switch (action.type) {
    case 'setUsers': {
      return {
        users: action.payload
      }
    }
    case 'resetUsers': {
      return {
        users: []
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

type UsersContextData = {
  users: User[]
  dispatch: React.Dispatch<UsersAction>
}

export const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData
)

