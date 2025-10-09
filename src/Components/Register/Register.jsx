import { useNavigate } from "react-router-dom"
import AuthForm from "../AuthForm/AuthForm"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slices/userSlice"
import { useState } from "react"

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (email, password) => {
        setError("");
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({ 
                    email: user.email,    
                    id: user.uid, 
                    token: user.accessToken 
                }));
                console.log('Registration successful');
                navigate("/");
            })
            .catch((error) => {
                console.log('Registration error:', error.code, error.message);
                
                switch(error.code){
                    case 'auth/email-already-in-use':
                        setError('emailAlreadyInUse');
                        break;
                    case 'auth/invalid-email':
                        setError('invalidEmail');
                        break;
                    case 'auth/weak-password':
                        setError('weakPassword');
                        break;
                    case 'auth/operation-not-allowed':
                        setError('operationNotAllowed');
                        break;
                    default:
                        setError('default');
                }
            });
    };

    return <AuthForm type="register" onSubmit={handleRegister} error={error} />
}

