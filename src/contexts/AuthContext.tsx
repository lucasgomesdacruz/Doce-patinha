import { ReactNode, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebaseConnection';

interface AuthProviderProps {
    children: ReactNode;
}

type AuthContextData = {
    signed: boolean;
    loadingAuth: boolean;
    user: UserProps | null
    logout: () => void; // 👈 adiciona aqui
}

interface UserProps {
    uid: string;
    name: string | null;
    email: string | null;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children}: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null)
    const [loadingAuth, setLoadingAuth] = useState(true)

    useEffect(() => {
        
        const unsub = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser({
                    uid: user.uid,
                    name: user?.displayName,
                    email: user?.email,
                })

                setLoadingAuth(false);
            } else {
                setUser(null);
                setLoadingAuth(false);
            }
        })

        return () => {
            unsub();
        }
    }, [])

    const logout = () => {
        signOut(auth)
          .then(() => {
            setUser(null);
          })
          .catch((error) => {
            console.error("Erro ao sair:", error);
          });
    };

    return (
        <AuthContext.Provider 
        value={{ 
            signed: !!user,
            loadingAuth,
            user,
            logout // 👈 inclui no provider
        }}
        >
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthProvider;