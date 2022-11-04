import { createContext } from 'react'

type CounterState = {
  count: number
}

export type CounterAction = {
  type:
    | 'incrementCounter'
    | 'decrementCounter'
    | 'resetCounter'
    | 'randomIncrementCounter'
  payload?: number
}

export const countReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'incrementCounter': {
      return {
        count: state.count + 1
      }
    }
    case 'decrementCounter': {
      return {
        count: state.count - 1
      }
    }
    case 'resetCounter': {
      return {
        count: 0
      }
    }
    case 'randomIncrementCounter': {
      return {
        count: state.count + Number(action?.payload)
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

interface CounterContextData {
  count: number
  dispatch: React.Dispatch<CounterAction>
}

export const CounterContext = createContext<CounterContextData>(
  {} as CounterContextData
)
