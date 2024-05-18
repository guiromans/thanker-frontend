import { useNavigate } from "react-router-dom";
import { AuthService } from "./services/AuthService"
import { useEffect } from "react";

export interface LogoutProps {
    onLogout: () => void;
}

export const LogoutPage = (props: LogoutProps) => {

    const authService: AuthService = new AuthService();
    const navigate = useNavigate();

    useEffect(() => {
        props.onLogout();
        logout();
    }, [])

    const logout = () => {
        authService.logout();
        navigate('/');
    }

    return (
        <div>Logging out...</div>
    )

}