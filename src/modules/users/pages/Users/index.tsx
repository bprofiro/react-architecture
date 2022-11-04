import { NavBar } from '@components/NavBar'
import { useAuth } from '@hooks/useAuth'
import { useUsers } from '@users/hooks/useUsers'

export const UsersList = () => {
  const { users } = useUsers()
  const { loggedUser } = useAuth()

  console.log(loggedUser)

  return (
    <div>
      <NavBar />
      <h1>Users list:</h1>

      <section>
        {users.map(user => (
          <p key={user.id}>{user.login}</p>
        ))}
      </section>
    </div>
  )
}
