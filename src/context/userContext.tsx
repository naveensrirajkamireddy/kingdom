import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Preferences } from "@capacitor/preferences";
import { setCachedToken } from "../apolloClient";

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
  logout: () => Promise<void>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { value } = await Preferences.get({ key: "customerData" });
        if (value) {
          const parsed = JSON.parse(value);
          setUserState(parsed);
          setCachedToken(parsed.authToken);
        }
      } catch (error) {
        console.error("Error loading user data from Preferences:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const setUser: React.Dispatch<React.SetStateAction<User | null>> = (newUser) => {
    setUserState(prevState => {
      const updatedUser = typeof newUser === 'function' ? newUser(prevState) : newUser;
      
      if (updatedUser) {
        Preferences.set({ key: "customerData", value: JSON.stringify(updatedUser) });
        setCachedToken(updatedUser.authToken);
      } else {
        Preferences.remove({ key: "customerData" });
        setCachedToken(null);
      }
      
      return updatedUser;
    });
  };

  const logout = async () => {
    await Preferences.remove({ key: "customerData" });
    setUserState(null);
    setCachedToken(null);
    window.location.href = "/home"; // or useHistory().push("/home") if needed
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoading }}>
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
