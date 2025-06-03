import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  customerId: string;
  customerName: string;
  email: string;
  mobile: string;
  address?: string | null;
  status: boolean;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export const logout = () => {
  const { setUser } = useUser();
  sessionStorage.clear();
  setUser(null);
  window.location.href = "/home"; // or useHistory().push("/home");
};