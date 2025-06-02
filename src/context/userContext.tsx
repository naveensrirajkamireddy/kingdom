import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

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

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  // Load user from sessionStorage on component mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem("customerData");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserState(parsedUser);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
      }
    }
  }, []);

  // Wrapper around setUserState that also saves to sessionStorage
  const setUser: React.Dispatch<React.SetStateAction<User | null>> = (userOrUpdater) => {
    setUserState(prevUser => {
      const userToStore = typeof userOrUpdater === "function" 
        ? userOrUpdater(prevUser)
        : userOrUpdater;

      if (userToStore) {
        sessionStorage.setItem("customerData", JSON.stringify(userToStore));
      } else {
        sessionStorage.removeItem("customerData");
      }

      return userToStore;
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export const logout = (setUser: React.Dispatch<React.SetStateAction<User | null>>) => {
  console.log("logout function started");
  sessionStorage.clear();  // or localStorage.clear();
  setUser(null);
  // navigate to home page
  window.location.href = "/home";  // or your router's method
};