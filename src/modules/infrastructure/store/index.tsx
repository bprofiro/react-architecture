import { PropsWithChildren, useReducer } from 'react'
import { CounterContext, countReducer } from './contexts/counter'
import { User, UsersContext, usersReducer } from './contexts/users'

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [counterState, counterDispatch] = useReducer(countReducer, { count: 0 })
  const [usersState, usersDispatch] = useReducer(usersReducer, {
    users: [] as User[]
  })

  return (
    <CounterContext.Provider
      value={{ count: counterState.count, dispatch: counterDispatch }}
    >
      <UsersContext.Provider
        value={{
          users: usersState.users,
          dispatch: usersDispatch
        }}
      >
        {children}
      </UsersContext.Provider>
    </CounterContext.Provider>
  )
}
