import { useNavigate } from "react-router-dom"
import AuthForm from "../AuthForm/AuthForm"

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (data) => {
        // Здесь будет логика входа
        console.log("Login attempt:", data);
        navigate("/");
    }

    return <AuthForm type="login" onSubmit={handleLogin} />
}