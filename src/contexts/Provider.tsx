import React from 'react';
import { UserProvider } from './User';
import { EstoqueProvider } from './Estoque';
// Import other context providers as needed

const Provider = ({ children }: {children: React.ReactNode}) => {
    return (
        <UserProvider>
            <EstoqueProvider>
                {/* Nest other providers here as needed */}
                {children}
            </EstoqueProvider>
        </UserProvider>
    );
};

export default Provider;
