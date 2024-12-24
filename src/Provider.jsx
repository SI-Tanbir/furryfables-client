import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase";

export const AuthContext = createContext("");

const Provider = ({ children }) => {
  

    const [user, setUser] = useState(null); // State to store user info
    const [loading, setLoading] = useState(true); // State to handle loading
  
  
    //adding observer here

    useEffect(() => {
        // Firebase observer for auth state

        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser); // Update user state
          setLoading(false); // Set loading to false once auth state is determined
        });
    
        // Cleanup subscription on unmount
        return () => unsubscribe();
      }, []);
      




  
    const info = {user,loading,setLoading};



  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
