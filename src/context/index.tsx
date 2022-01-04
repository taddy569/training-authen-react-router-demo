import { createContext, useContext } from "react";

interface AuthContextType {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!)

function useAuth() {
  return useContext(AuthContext)
}

export {
  AuthContext,
  useAuth,
}
