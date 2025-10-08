import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import styles from "./PasswordInput.module.css"

export default function PasswordInput({ 
    name, 
    placeholder, 
    value, 
    onChange, 
    required = true 
}) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword(prev => !prev);
    }

    return (
        <div className={styles.passwordContainer}>
            <input 
                name={name}
                type={showPassword ? "text" : "password"} 
                placeholder={placeholder} 
                required={required}
                value={value}
                onChange={onChange}
            />
            {value && (
                <span 
                    className={styles.passwordToggle} 
                    onClick={toggleVisibility}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            )}
        </div>
    )
}

