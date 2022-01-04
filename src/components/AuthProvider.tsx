import React, { ReactNode, useState } from "react";

import { AuthContext } from "../context";
import { fakeAuthProvider } from "../fakeData";

function AuthProvider({ children }: {children: ReactNode}) {
  let [user, setUser] = useState<any>(null)

  let signIn = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser)
      callback()
    })
  }

  let signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null)
      callback()
    })
  }

  let value = { user, signIn, signOut }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
