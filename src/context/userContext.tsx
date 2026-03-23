import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface User {
  customerId: string;
  customerName: string;
  email: string;
  mobile: string;
  address?: string | null;
  status: boolean;
  authToken: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem("customerData");
    return stored ? JSON.parse(stored) : null;
  });

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    window.location.href = "/home"; // or useHistory().push("/home") if needed
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export { useUser };
