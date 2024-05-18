import { ChangeEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { UserService } from "./services/UserService";

export const ResetPasswordPage = () => {
    const userService: UserService = new UserService();
    const params = useParams();
    const userId: string | undefined = params.userId;
    const resetPasswordId: string | undefined = params.resetPasswordId;
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);
    const [displayError, setDisplayError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }

    const setNewPassword = async(event: React.FormEvent) => {
        event.preventDefault();
        
        if (password === confirmPassword && userId && resetPasswordId) {
            setDisplayError(false);
            await userService.setNewPassword(userId, resetPasswordId, password)
                .then(() => {
                    setDisplaySuccess(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);
                });
        } else {
            setDisplayError(true);
        }
    }

    return (
        <div className='top-padding'>
            <h2>Reset Password</h2>
            <br/>
            <form onSubmit={setNewPassword}>
                New password&nbsp;<input type='password' name='password' onChange={handlePasswordChange} />
                Confirm password&nbsp;<input type='password' name='confirmPassword' onChange={handleConfirmPasswordChange} />
                <button type='submit'>Submit</button>
            </form>
            <br/>
            {displaySuccess && 'New password has been reset!\nGo to login page or wait to be redirected there...'}
            {displayError && 'New password and its confirmation value must match!'}
        </div>
    )

}