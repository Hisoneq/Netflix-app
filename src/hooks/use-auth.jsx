import { useSelector } from "react-redux";

export const useAuth = () => {
    const { email, id, token } = useSelector((state) => state.user);
    return { 
        isAuth: !!email,
        email, 
        id, 
        token };
}