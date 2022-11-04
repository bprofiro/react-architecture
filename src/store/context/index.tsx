import { PropsWithChildren } from 'react'
import { CounterProvider } from '@counter/contexts'
import { UsersProvider } from '@users/contexts'

export const ContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <CounterProvider>
      <UsersProvider>{children}</UsersProvider>
    </CounterProvider>
  )
}
