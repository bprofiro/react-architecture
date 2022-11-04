import { PropsWithChildren, useReducer } from 'react'
import { User, UsersContext, usersReducer } from '@users/contexts/users'

export function UsersProvider({ children }: PropsWithChildren<unknown>) {
  const [usersState, usersDispatch] = useReducer(usersReducer, {
    users: [] as User[]
  })

  return (
    <UsersContext.Provider
      value={{
        users: usersState.users,
        dispatch: usersDispatch
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
