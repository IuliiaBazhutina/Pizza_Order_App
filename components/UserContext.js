import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("Customer");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the user info context
// export const useUserContext = () => useContext(UserContext);
