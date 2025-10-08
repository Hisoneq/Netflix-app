import { useNavigate } from "react-router-dom"
import AuthForm from "../../Components/AuthForm/AuthForm"
import Footer from "../../Components/Footer/Footer"

export default function RegisterPage() {
    const navigate = useNavigate();

    const handleRegister = (data) => {
        // Здесь будет логика регистрации
        console.log("Registration attempt:", data);
        // После успешной регистрации перенаправляем на главную
        navigate("/");
    }

    return (
        <>
            <AuthForm type="register" onSubmit={handleRegister} />
            <Footer />
        </>
    )
}