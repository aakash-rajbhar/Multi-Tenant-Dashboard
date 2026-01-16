import { useAuth } from "../../auth/AuthContext"

const AdminOnly = ({ children }) => {
  const { user } = useAuth()

  if (user.role !== "admin") {
    return null
  }

  return children
}

export default AdminOnly
