import { Link } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'

export const NavBar = () => {
  const { handleSignOut } = useAuth()

  return (
    <div>
      <section>
        <Link to="/users">Users</Link>
      </section>

      <section>
        <Link to="/counter">Counter</Link>
      </section>
      <section>
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </section>
    </div>
  )
}
