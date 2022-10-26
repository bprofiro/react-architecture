import { useUsers } from '../../../application/hooks/useUsers'

export const UsersList = () => {
  const { users } = useUsers()

  return (
    <div>
      <h1>Users list:</h1>

      <section>
        {users.map(user => (
          <p key={user.id}>{user.login}</p>
        ))}
      </section>
    </div>
  )
}
