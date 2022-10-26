import { decrementCounter, incrementCounter, randomIncrementCounter, resetCounter } from "../../infrastructure/store/slices/counter"
import { useReduxDispatch } from "./useReduxDispatch"
import { useReduxSelector } from "./useReduxSelector"

export const useCounter = () => {
  const dispatch = useReduxDispatch()
  const counter = useReduxSelector(state => state.counter.value)

  const increment = () => dispatch(incrementCounter())
  const decrement = () => dispatch(decrementCounter())
  const reset = () => dispatch(resetCounter())

  const randomIncrement = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1

    dispatch(randomIncrementCounter(randomNumber))
  }


  return {
    counter,
    increment,
    decrement,
    reset,
    randomIncrement
  }
}