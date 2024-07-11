"use client";
import { ReactNode, createContext, useState, useContext } from "react";

type AuthContextType = {
    token: string|undefined;
    handleGetToken: (jwtToken: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState<string|undefined>();

    const handleGetToken = async (jwtToken: string)=>{
        setToken(jwtToken);
        localStorage.setItem('token', jwtToken);
    }

    return (
        <AuthContext.Provider value={{
            token,
            handleGetToken,
        }}>
            <>{children}</>
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }