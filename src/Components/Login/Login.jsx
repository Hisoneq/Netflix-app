import styles from "./Login.module.css"
import logo from "../../assets/images/LogoNetflix.png"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/");
    }

    return(
        <div className={styles.login}>
            
            <img 
                src={logo} 
                alt="Logo"
                width={200}
                onClick={handleLogin}
                style={{ cursor: "pointer" }}
            />

            <div className={styles.loginForm}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" />
                <input type="password" placeholder="Password" />
                <button className={styles.signInButton}>Sign In</button>
                <p className={styles.or}>OR</p>
                <button className={styles.signInCodeButton}>Use a Sign-in code</button>
                <a href="#" className={styles.forgotPassword}>Forgot your password?</a>
                <div className={styles.checkboxContainer}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <div className={styles.signupContainer}>
                    <p className={styles.newToNetflix}>New to Netflix?</p>   
                    <a className={styles.signUpButton} href="#">Sign up now.</a>
                </div>
            </div>
        </div>
    )
}