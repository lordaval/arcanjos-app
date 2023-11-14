import { useCallback, useEffect, useState } from 'react';
import MainRoutes from './src/routes';
import Login from './src/screens/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Provider from './src/contexts/Provider';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return subscribe;
  }, []);


  return (
    <>
      {isLoggedIn === null ? (
        <ActivityIndicator size={50} color={'#000'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
      ) : isLoggedIn ? (
        <Provider>
          <MainRoutes />
        </Provider>
      ) : (
        <Login />
      )}
      <StatusBar style='auto' />
    </>
  );
}
