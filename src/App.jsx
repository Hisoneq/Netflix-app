import { Routes, Route } from "react-router-dom"

import { HomePage, LoginPage, RegisterPage, FavoritePage } from "./pages"
import AuthProvider from "./Components/AuthProvider/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/favorites" element={<FavoritePage />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
