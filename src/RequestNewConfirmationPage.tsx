import { ChangeEvent, FormEvent, useState } from "react";
import { UserService } from "./services/UserService"
import { ErrorResponse } from "react-router-dom";
import { Loader } from "./cards/Loader";
import './style/Fonts.css';
import { ERROR_EMAIL_NOT_EXISTS, ERROR_INVALID_EMAIL, Language, NEW_CONFIRMATION, NEW_CONFIRMATION_EMAIL_REQUESTED, NEW_CONFIRMATION_TITLE, PASSWORD_RESET_REQUEST_SENT, REQUEST_RESET_PASSWORD, RESET_PASSWORD, TranslationService, YOUR_EMAIL } from "./services/TranslationService";
import { useSnackbar } from "notistack";

export interface RequestResetPassProps {
    language: Language | undefined;
    onResetRequested: () => void;
}

export const RequestNewConfirmationPage = (props: RequestResetPassProps) => {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const userService: UserService = new UserService();
    const translationService: TranslationService = new TranslationService();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const requestNewConfirmation = (event: FormEvent) => {
        event.preventDefault();

        if (email.length > 0 && email.includes('@') && props.language) {
            setLoading(true);
            userService.requestNewConfirmation(email, props.language)
                .then(() => {
                    setEmail('');
                    enqueueSnackbar(`${translationService.getFor(NEW_CONFIRMATION_EMAIL_REQUESTED)}`, { variant: 'success' });
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

    return (
        <div className='top-padding'>
            <h1>{translationService.getFor(NEW_CONFIRMATION_TITLE)}</h1><br/>
            <form onSubmit={requestNewConfirmation}>
                <input 
                    type='text' 
                    name='email' 
                    value={email} 
                    onChange={handleEmailChange}
                    placeholder={translationService.getFor(YOUR_EMAIL)}
                    className='medium-input'
                    disabled={loading}
                /><br/><br/><br/>
                <button type='submit' disabled={loading}>{translationService.getFor(NEW_CONFIRMATION)}</button>
            </form><br/>
            {loading && <Loader size="big" />}<br/>
        </div>
    );

}