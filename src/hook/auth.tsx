import { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  cpf: number;
  email: string;
  name: string;
  phoneNumber: number;
  address: string;
  username: string;
  password?: string;
}

interface IAuthContextData {
  user: User | null;
  setUser(user: User | null): void;
  createUserAccount(user: User): void;
  signIn(username: string, password: string): void;
  signOut(): void;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>({} as User);

  async function createUserAccount(data: User) {
    try {
      const response = await api.post("/user", data);

      console.log(response.data);

      return response;
    } catch (error) {
      return error;
    }
  }

  async function signIn(username: string, password: string) {
    try {
      const response = await api.post("/auth/login", { username, password });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {}

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser,
        createUserAccount,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
