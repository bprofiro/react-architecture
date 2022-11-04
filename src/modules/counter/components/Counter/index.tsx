import { useCounter } from '@counter/hooks/useCounter'

export const Counter = () => {
  const { counter } = useCounter()
  return (
    <div>
      <h1>Counter:</h1>
      <p>{counter}</p>
    </div>
  )
}
