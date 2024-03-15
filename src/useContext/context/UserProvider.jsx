import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  // const user = {
  //   id: 321353156,
  //   name: 'Rick Montz',
  //   email: 'rick@example.com'
  // }

  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider >
  )
}
