import { NavBar } from '@components/NavBar'
import { ActionsSection } from '@counter/components/ActionsSection'
import { Counter as CounterComponent } from '@counter/components/Counter'

export const Counter = () => {
  return (
    <div>
      <NavBar />

      <CounterComponent />

      <ActionsSection />
    </div>
  )
}
