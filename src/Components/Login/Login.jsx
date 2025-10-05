import styles from "./Login.module.css"
import logo from "../../assets/images/LogoNetflix.png"

export default function Login(){
    return(
        <div className={styles.login}>
            
            <img 
                src={logo} 
                alt="Logo"
                width={200}
                 />

            <div className={styles.loginForm}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
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