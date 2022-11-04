import { useCounter } from '@counter/hooks/useCounter'

export const ActionsSection = () => {
  const { decrement, increment, randomIncrement, reset } = useCounter()

  return (
    <div>
      <button type="button" onClick={increment}>
        Incremet
      </button>
      <button type="button" onClick={decrement}>
        Decremet
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="button" onClick={randomIncrement}>
        Random Incremet
      </button>
    </div>
  )
}
