import React , { createContext , useState} from "react";

// Yahaan ek context object create ho raha hai.
// Iska matlab hai React ek global authentication box bana raha hai.
export const AuthContext = createContext();


// Yani AuthProvider ke andar jitne bhi components hain, sab children kehlate hain
// AuthProvider ek wrapper component hai jo poore app ko authentication data provide karega.
export const AuthProvider = ({ children }) => {
  const [user , setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userInfo" , JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  }

  return (
    // Ye Provider ka kaam hai data ko neeche wale components tak pahunchana.
    <AuthContext.Provider value={{user , login , logout}}>
      {children}
    </AuthContext.Provider>
  )
};





