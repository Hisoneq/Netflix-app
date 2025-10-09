import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import AuthForm from "../AuthForm/AuthForm"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slices/userSlice"
import { useState } from "react"

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const handleLogin = (email, password) => {
        setError(""); // Очистка предыдущей ошибки
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({ 
                    email: user.email,    
                    id: user.uid, 
                    token: user.accessToken 
                }));
                console.log('Login successful - User exists');
                navigate("/");
            })
            .catch((error) => {
                console.log('Login error:', error.code, error.message);
                
                switch(error.code){
                    case 'auth/invalid-credential':
                        setError('invalidCredential');
                        break;
                    case 'auth/user-not-found':
                        setError('userNotFound');
                        break;
                    case 'auth/wrong-password':
                        setError('wrongPassword');
                        break;
                    case 'auth/invalid-email':
                        setError('invalidEmail');
                        break;
                    case 'auth/too-many-requests':
                        setError('tooManyRequests');
                        break;
                    default:
                        setError('default');
                }
            });
    };

    return <AuthForm type="login" onSubmit={handleLogin} error={error} />
}