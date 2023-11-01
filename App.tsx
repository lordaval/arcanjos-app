import { useEffect, useState } from 'react';
import MainRoutes from './src/routes';
import Login from './src/screens/Login';
import { auth } from './firebase';

export default function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })

    return subscribe
  }, [])

  return isLoggedIn ? <MainRoutes /> : <Login />

}
