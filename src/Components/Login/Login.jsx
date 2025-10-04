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

            <h1>Login</h1>
        </div>
    )
}