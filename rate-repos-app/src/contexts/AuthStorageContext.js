import React, { useContext } from 'react';

import AuthStorage from '../utils/authStorage';

export const AuthStorageContext = React.createContext();

//Este esta al pedo, porque en app.js si o si debo crear el provider como se ve y no puedo meter un com AuthStorageProvider, ya que ApolloProvider debe usar el mismo authStorage que AuthStorageContext.Provider, y el authStorageProvier ir dentro de ApolloProvider, no puede hacer que ApolloProvider use su contexto, osea el AuthStorage creado aca
const AuthStorageProvider = ({children}) => {
    const authStorage = new AuthStorage();

    return(
        <AuthStorageContext.Provider value={authStorage}>
            {children}
        </AuthStorageContext.Provider>
    );
}

const useAuthStorage = () => {
    const context = useContext(AuthStorageContext);
    if(context === undefined) throw new Error("useAuthStorage  must be used in AuthStorageProvider");
    return context;
}

export {AuthStorageProvider, useAuthStorage};