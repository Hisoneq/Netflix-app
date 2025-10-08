import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import AuthForm from "../AuthForm/AuthForm"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/slices/userSlice"

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = (email, password) => {

        const auth = getAuth();
           signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({ 
                    email: user.email,    
                    id: user.uid, 
                    token: user.accessToken 
                }));
            })
        .catch((console.log))

        navigate("/");
    };

    return <AuthForm type="login" onSubmit={handleLogin} />
}