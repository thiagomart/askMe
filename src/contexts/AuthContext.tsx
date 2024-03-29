import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { AuthContextType } from "../types/authContextType.type";
import { User } from "../types/user.type";
import { auth, firebase } from '../services/firebase';


const AuthContext = createContext({} as AuthContextType);

type AuthContextProps = {
    children: ReactNode
}

const AuthContextProvider = (props: AuthContextProps) => {
    const [user, setUser] = useState<User>()
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          const { displayName, photoURL, uid } = user;
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account.');
          }
          setUser({
            id: uid,
            name: displayName, 
            avatar: photoURL
          })
        }
      })
      return () => {
        unsubscribe()
      }
    }, [])
  
    const signInWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider(); 
      const result = await auth.signInWithPopup(provider);
      
      if (result.user) {
        const { displayName, photoURL, uid } = result.user;
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }
        setUser({
          id: uid,
          name: displayName, 
          avatar: photoURL
        })
      }  
  
    }
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}



export {
    AuthContextProvider,
    AuthContext,
}