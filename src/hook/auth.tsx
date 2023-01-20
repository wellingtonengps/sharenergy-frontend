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
  //username: string;
  //password: string;
}

interface IAuthContextData {
  user: User | null;
  setUser(user: User | null): void;
  handleCreateUserAccount(user: User): void;
  handleSignIn(CPF: string, password: string): void;
  handleSignOut(): void;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function handleCreateUserAccount(data: User) {
    try {
      const response = await api.post("/user", data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setUser(data);
  }

  async function handleSignIn(CPF: string, password: string) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignOut() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleCreateUserAccount,
        handleSignIn,
        handleSignOut,
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
