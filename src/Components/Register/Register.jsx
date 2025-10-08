import { useNavigate } from "react-router-dom"
import AuthForm from "../AuthForm/AuthForm"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slices/userSlice"

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    dispatch(setUser({ 
                        email: user.email,    
                        id: user.uid, 
                        token: user.accessToken 
                    }));
                })
                .catch(console.log);

        navigate("/");
    };

    return <AuthForm type="register" onSubmit={handleRegister} />
}

