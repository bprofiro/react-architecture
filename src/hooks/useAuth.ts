import { useNavigate } from "react-router-dom";
import { signIn, signOut } from "@store/redux/slices/auth";
import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useReduxSelector } from "@hooks/useReduxSelector";

type SignInProps = {
  name: string;
  password: string;
}

type LoggedUserProps = {
  name: string;
}

type UseAuthReturn = {
  handleSignIn: (params: SignInProps) => void;
  handleSignOut: () => void;
  loggedUser: LoggedUserProps
}

export const useAuth = (): UseAuthReturn => {
  const dispatch = useReduxDispatch()
  const navigate = useNavigate()
  const { loggedUser } = useReduxSelector(state => state.auth.value)

  const handleSignIn = ({ name, password }: SignInProps) => {
    if (password.length >= 6) {
      dispatch(signIn({ name: name }))

      navigate("/users")
    }
  }

  const handleSignOut = () => {
      dispatch(signOut())

      navigate("/")
  }

  return {
    handleSignIn,
    handleSignOut,
    loggedUser
  }
}