import { Routes, Route } from "react-router-dom"

import { HomePage, LoginPage, RegisterPage } from "./pages"
import AuthProvider from "./Components/AuthProvider/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
