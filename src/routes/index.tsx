import { createBrowserRouter } from 'react-router-dom'
import { Login } from '@pages/auth'
import { Counter } from '@pages/counter'
import { UsersList } from '@pages/users'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/users',
    element: <UsersList />
  },
  {
    path: '/counter',
    element: <Counter />
  }
])
