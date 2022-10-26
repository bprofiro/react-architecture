import { ActionsSection } from '../../components/ActionsSection'
import { Counter } from '../../components/Counter'
import { UsersList } from '../../components/UsersList'

export const Dashboard = () => {
  return (
    <div>
      <Counter />

      <ActionsSection />

      <UsersList />
    </div>
  )
}
