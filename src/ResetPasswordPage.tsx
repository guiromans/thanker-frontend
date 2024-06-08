import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { UserService } from "./services/UserService";
import './style/ResetPassword.css';
import './style/Styles.css';
import { CANNOT_RESET_PASSWORD, CONFIRM_NEW_PASSWORD, NEW_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, SUBMIT, TranslationService, UPDATE_PASSWORD } from "./services/TranslationService";
import { validatePasswordRules } from "./utils/PasswordUtils";
import { Loader } from "./cards/Loader";
import { CheckResetPasswordResponse } from "./model/UserModel";

export interface ResetPasswordProps {
    onError: () => void;
}

export const ResetPasswordPage = (props: ResetPasswordProps) => {
    const userService: UserService = new UserService();
    const params = useParams();
    const userId: string | undefined = params.userId;
    const resetPasswordId: string | undefined = params.resetPasswordId;
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);
    const [displayError, setDisplayError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [disableFields, setDisableFields] = useState<boolean>(false);
    const [canChangePassword, setCanChangePassword] = useState<boolean | null>(null);
    const navigate = useNavigate();

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        checkCanChangePassword();
    }, []);

    useEffect(() => {
        if (evalCannotChangePassword()) {
            onLoadErrorSection();
        }
    }, [canChangePassword]);

    const checkCanChangePassword = async() => {
        if (!userId || !resetPasswordId) {
            setCanChangePassword(false);
        } else {
            await userService.checkResetPasswordExists(userId, resetPasswordId)
                .then(resp => {
                    const respDto: CheckResetPasswordResponse = resp.data as CheckResetPasswordResponse;
                    setCanChangePassword(respDto.exists);
                })
                .catch(() => setCanChangePassword(false));
        }
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }

    const setNewPassword = async(event: React.FormEvent) => {
        event.preventDefault();
        
        if (validatePasswordRules(password) && password === confirmPassword && userId && resetPasswordId) {
            setDisplayError(false);
            setLoading(true);
            setDisableFields(true);
            await userService.setNewPassword(userId, resetPasswordId, password)
                .then(() => {
                    setDisplaySuccess(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);
                })
                .finally(() => setLoading(false));
        } else {
            setDisplayError(true);
        }
    }

    const onLoadErrorSection = () => {
        setTimeout(() => {
            props.onError();
        }, 5000);
    }

    const evalCanChangePassword = (): boolean => {
        return canChangePassword !== null && canChangePassword;
    }

    const evalCannotChangePassword = (): boolean => {
        return canChangePassword !== null && !canChangePassword;
    }

    return (
        <div className='top-padding confirming-section form'>
            {evalCanChangePassword() && (
                <div>
                    <h2>{translationService.getFor(UPDATE_PASSWORD)}</h2>
                    <br/>
                    <form onSubmit={setNewPassword} className="form">
                        <input type='password' name='password' className="text-fields" disabled={disableFields} onChange={handlePasswordChange} placeholder={translationService.getFor(NEW_PASSWORD)} /><br/>
                        <input type='password' name='confirmPassword' className="text-fields" disabled={disableFields} onChange={handleConfirmPasswordChange} placeholder={translationService.getFor(CONFIRM_NEW_PASSWORD)} /><br/><br/>
                        <button type='submit' className="thanker-button" disabled={disableFields}>{translationService.getFor(SUBMIT)}</button>
                    </form>
                    <br/>
                    <div className="message">
                        {displaySuccess && translationService.getFor(RESET_PASSWORD_SUCCESS)}
                        {displayError && translationService.getFor(RESET_PASSWORD_ERROR)}
                        {loading && <Loader size="medium" />}
                    </div>
                </div>
            )}
            {evalCannotChangePassword() && (
                <div className="error-message">
                    <b>{translationService.getFor(CANNOT_RESET_PASSWORD)}</b>
                </div>
            )}
        </div>
    )

}