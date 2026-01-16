import { createContext, useContext, useState } from "react"
import { tenants } from "../data/mockData"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Aakash",
    role: "admin", // "admin" or "agent"
    tenantId: "orgA",
  })

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const switchTenant = (tenantId) => {
    setUser(prev => ({ ...prev, tenantId }))
  }

  const switchRole = (role) => {
    setUser(prev => ({ ...prev, role }))
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const login = (name, role) => {
    setUser({
      name,
      role,
      tenantId: "orgA"
    })
    setIsAuthenticated(true)
  }

  const value = {
    user,
    tenants,
    isAuthenticated,
    switchTenant,
    switchRole,
    logout,
    login
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
