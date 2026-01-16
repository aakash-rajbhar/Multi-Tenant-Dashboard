import { AuthProvider } from "./auth/AuthContext"
import Layout from "./shared/components/Layout"

const App = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}

export default App
