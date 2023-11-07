import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase';
import { query, collection, where, getDocs } from 'firebase/firestore'

// Crie o contexto
interface userData {
  nome: string,
  cargo: string,
  email: string
}

const AuthContext = createContext<userData | null>(null);

export const UserProvider = ({ children }: {children: React.ReactNode}) => {
  const [userData, setUserData] = useState<userData | any>({});

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = collection(firestore, "users");
      const queryByEmail = query(usersCollection, where("email", "==", auth.currentUser?.email));
    
      const querySnapshot = await getDocs(queryByEmail);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setUserData(doc.data());
      } else {
        console.log("Nenhum documento encontrado com o email fornecido.");
      }
    };

    fetchData();

  }, []);

  return (
    <AuthContext.Provider value={userData as userData}>
      {children}
    </AuthContext.Provider>
  );
};

// Crie um hook personalizado para acessar os dados do usuário
export const useAuth = () => {
  return useContext(AuthContext);
};
