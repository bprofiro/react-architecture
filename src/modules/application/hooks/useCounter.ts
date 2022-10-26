import { useContext } from "react"
import { CounterContext } from "../../infrastructure/store/contexts/counter"

export const useCounter = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error('useCounter must be used within an CounterProvider');
  }

  const { count, dispatch } = context

  const increment = () => dispatch({ type: "incrementCounter" })
  const decrement = () => dispatch({ type: "decrementCounter" })
  const reset = () => dispatch({ type: "resetCounter" })

  const randomIncrement = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1

    dispatch({ type: "randomIncrementCounter", payload: randomNumber })
  }


  return {
    counter: count,
    increment,
    decrement,
    reset,
    randomIncrement
  }
}