import { useAuth } from '@hooks/useAuth'
import { useForm } from '@hooks/useForm'

export const Login = () => {
  const { handleSignIn } = useAuth()
  const { getFormValue } = useForm()

  const handleLogin: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    const formValues = getFormValue(event.target as HTMLFormElement, [
      'name',
      'password'
    ])

    const { name, password } = formValues

    handleSignIn({ name, password })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Name" name="name" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
