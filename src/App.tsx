import { Dashboard } from './modules/presentation/pages/Dashboard'
import { AppProvider } from './modules/infrastructure/store'

export const App = () => {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  )
}
