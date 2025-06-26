
import { RouterProvider } from 'react-router'
import './App.css'

import router from './router/router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { CookiesProvider } from 'react-cookie'
import { LoadScript } from '@react-google-maps/api'
const apiUrl = import.meta.env.REACT_APP_API_URL;

function App() {
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
             <LoadScript googleMapsApiKey={apiUrl}>
          <RouterProvider router={router} />
          </LoadScript>
        </Provider>
      </CookiesProvider>
    </>
  )
}

export default App