
import { RouterProvider } from 'react-router'
import './App.css'

import router from './router/router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { CookiesProvider } from 'react-cookie'
import { LoadScript } from '@react-google-maps/api'

function App() {
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
             <LoadScript googleMapsApiKey={process.env.KEY_API as string}>
          <RouterProvider router={router} />
          </LoadScript>
        </Provider>
      </CookiesProvider>
    </>
  )
}

export default App