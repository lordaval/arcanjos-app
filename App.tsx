import { useEffect, useState } from 'react';
import MainRoutes from './src/routes';
import Login from './src/screens/Login';
import app from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {ActivityIndicator} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const auth = getAuth(app);

export default function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

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

  return (
    <>
      {isLoggedIn ? <MainRoutes /> : isLoggedIn === null ? <ActivityIndicator size={50} color={'#000'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} /> : <Login />}
      <StatusBar style='auto' />
    </>
  )

}
