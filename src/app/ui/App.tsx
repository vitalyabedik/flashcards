import { Provider } from 'react-redux'

import { store } from '@/app'
import { Router } from '@/common'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
