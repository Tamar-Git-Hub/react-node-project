import { RouterProvider } from 'react-router'
import './App.css'

import router from './router/router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { CookiesProvider } from 'react-cookie'
import { io } from "socket.io-client";
import { useEffect } from 'react'

const socket = io("http://localhost:5000"); 
function App() {
  useEffect(() => {
    socket.on("newLost", (data) => {
      alert(data.message);
      // או להראות את ההודעה UI בצורה אחרת, לא רק alert
      console.log("התקבלה התראה:", data);
    });

    return () => {
      socket.off("newLost");
    };
  }, []);


  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </CookiesProvider>
    </>
  )
}

export default App