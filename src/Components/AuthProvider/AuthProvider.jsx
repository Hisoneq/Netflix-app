import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { setUser, removeUser } from "../../store/slices/userSlice.js";
import Loader from "../Loader/Loader";

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
            } else {
                dispatch(removeUser());
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [dispatch]);


    if (loading) {
        return <Loader />;
    }

    return (
        <>
        {children}
        </>
    );
}