import { PropsWithChildren, useReducer } from 'react'

import { CounterContext, countReducer } from '@counter/contexts/counter'

export function CounterProvider({ children }: PropsWithChildren<unknown>) {
  const [counterState, counterDispatch] = useReducer(countReducer, { count: 0 })

  return (
    <CounterContext.Provider
      value={{ count: counterState.count, dispatch: counterDispatch }}
    >
      {children}
    </CounterContext.Provider>
  )
}
