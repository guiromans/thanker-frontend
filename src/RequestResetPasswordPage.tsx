import { ChangeEvent, FormEvent, useState } from "react";
import { UserService } from "./services/UserService"
import { ErrorResponse } from "react-router-dom";
import { Loader } from "./cards/Loader";
import './style/Fonts.css';
import './style/Styles.css';
import { ERROR_EMAIL_NOT_EXISTS, ERROR_INVALID_EMAIL, Language, PASSWORD_RESET_REQUEST_SENT, REQUEST_RESET_PASSWORD, RESET_PASSWORD, TranslationService, YOUR_EMAIL } from "./services/TranslationService";
import { useSnackbar } from "notistack";
import { isMobile } from "react-device-detect";

export interface RequestResetPassProps {
    language: Language | undefined;
    onResetRequested: () => void;
}

export const RequestResetPasswordPage = (props: RequestResetPassProps) => {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [disableFields, setDisableFields] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const userService: UserService = new UserService();
    const translationService: TranslationService = new TranslationService();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const requestPasswordReset = (event: FormEvent) => {
        event.preventDefault();

        if (email.length > 0 && email.includes('@') && props.language) {
            setLoading(true);
            setDisableFields(true);
            userService.requestPasswordReset(email, props.language)
                .then(() => {
                    setEmail('');
                    enqueueSnackbar(`${translationService.getFor(PASSWORD_RESET_REQUEST_SENT)}`, { variant: 'success' });
                    setTimeout(() => {
                        props.onResetRequested();
                    }, 1500);
                })
                .catch((e) => {
                    const error: ErrorResponse = e.response.data as ErrorResponse;
                    if (error.status === 404) {
                        enqueueSnackbar(`${translationService.getFor(ERROR_EMAIL_NOT_EXISTS)} ${email}`, { variant: 'error'});
                    }
                })
                .finally(() => setLoading(false));
        } else {
            enqueueSnackbar(`${translationService.getFor(ERROR_INVALID_EMAIL)} ${email}`, { variant: 'error'});
        }
    }

    const resolveInputClass = () => {
        return isMobile ? "smaller-input" : "medium-input";
    }

    return (
        <div className='top-padding full-height'>
            <h1>{translationService.getFor(RESET_PASSWORD)}</h1><br/>
            <form onSubmit={requestPasswordReset}>
                <input 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handleEmailChange}
                    placeholder={translationService.getFor(YOUR_EMAIL)}
                    className={resolveInputClass()}
                    disabled={disableFields}
                /><br/><br/><br/>
                <button type='submit' className="thanker-button" disabled={disableFields}>{translationService.getFor(REQUEST_RESET_PASSWORD)}</button>
            </form><br/>
            <div className="loader-confirmations">
                {loading && <Loader size="big"/>}
            </div>
            <br/>
        </div>
    );

}