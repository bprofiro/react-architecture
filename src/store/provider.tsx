import { PropsWithChildren } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { router } from '@routes/index'
import { ContextProvider } from '@store/context'
import { store } from '@store/redux'

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <Provider store={store}>
      <ContextProvider>
        {children}
        <RouterProvider router={router} />
      </ContextProvider>
    </Provider>
  )
}
