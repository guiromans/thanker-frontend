import { ChangeEvent, useState } from "react";
import { UserService } from "./services/UserService";
import { CreateUserRequest } from "./model/UserModel";
import { ErrorResponse } from "./model/ErrorResponse";
import { CHECK_YOUR_EMAIL_ACCOUNT_CREATE, CREATE, CREATE_USER, ERRORS_IN_FORM, ERROR_ACCEPT_TERMS_AND_CONDITIONS, ERROR_EMAIL_NOT_EMPTY, ERROR_HANDLE_NOT_EMPTY, ERROR_NAME_NOT_EMPTY, ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING, ERROR_PASSWORD_NOT_EMPTY, ERROR_PASSWORD_RULES, Language, REGISTER_CONFIRM_PASSWORD, REGISTER_EMAIL, REGISTER_HANDLE, REGISTER_NAME, REGISTER_PASSWORD, TERMS_AND_CONDITIONS, TranslationService, USER_CREATED_TEXT } from "./services/TranslationService";
import { useSnackbar } from "notistack";
import './style/CreateUser.css';
import './style/Styles.css';
import { Loader } from "./cards/Loader";
import { validatePasswordRules } from "./utils/PasswordUtils";
import { newWindowOf } from "./utils/WindowUtils";

export interface CreateUserProps {
    language: Language | undefined;
    onUserCreated: () => void;
}

export const CreateUserPage = (props: CreateUserProps) => {

    const [name, setName] = useState<string>('');
    const [handle, setHandle] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');
    const [visibleForm, setVisibleForm] = useState<boolean>(true);
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorHandle, setErrorHandle] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPassword, setErrorPassword] = useState<boolean>(false);
    const [errorPasswordRules, setErrorPasswordRules] = useState<boolean>(false);
    const [errorConfirmPass, setErrorConfirmPass] = useState<boolean>(false);
    const [errorTerms, setErrorTerms] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();

    const userService: UserService = new UserService();
    const translationService: TranslationService = new TranslationService();

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedName: string = event.target.value;
        if (validateName(updatedName)) {
            setErrorName(false);
        }
        setName(updatedName);
    }

    const handleHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedHandle: string = event.target.value;
        if (validateHandle(handle)) {
            setErrorHandle(false);
        }
        setHandle(updatedHandle);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedEmail: string = event.target.value;
        if (validateEmail(updatedEmail)) {
            setErrorEmail(false);
        }
        setEmail(updatedEmail);
    }
  
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedPassword: string = event.target.value;
        if (validatePasswordRules(updatedPassword)) {
            setErrorPassword(false);
            setErrorConfirmPass(false);
        }
        setPassword(updatedPassword)
    }

    const validateMatchingPasswords = (password: string): boolean => {
        return password === confirmPass;
    }

    const handleConfirmPassChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedPassword: string = event.target.value;

        if (password === updatedPassword) {
            setErrorConfirmPass(false);   
        }
        setConfirmPass(event.target.value);
    }

    const createUser = async(event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        
        if (hasAllValidParams() && props.language) {
            setVisibleForm(false);
            const createRequest: CreateUserRequest = {
                email: email,
                password: password,
                handle: handle,
                name: name
            }
            await userService.createUser(createRequest, props.language)
                .then(() => {
                    setVisibleForm(false);
                    enqueueSnackbar(`${translationService.getFor(USER_CREATED_TEXT)}: ${email}`, { variant: 'success' });
                    
                    setTimeout(() => {
                        props.onUserCreated();
                    }, 5000); 
                })
                .catch(e => {
                    const error: ErrorResponse = e.response.data as ErrorResponse;
                    enqueueSnackbar(`${error.detail}`,  { variant: 'error' });
                    setVisibleForm(true);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
            enqueueSnackbar(`${translationService.getFor(ERRORS_IN_FORM)}`,  { variant: 'error' })
        }
    }

    const handleTermsConditionsCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checked: boolean = event.target.checked;
        if (checked) {
            setErrorTerms(false);
        }
        setAcceptedTerms(checked);
    }

    const validateName = (name: string): boolean => {
        return name !== undefined && name !== null && name.length > 0;
    }

    const validateHandle = (handle: string): boolean => {
        return handle !== undefined && handle !== null && handle.length > 0;
    }

    const validateEmail = (email: string): boolean => {
        return email !== null && email.length > 0;
    }

    const validateCheckedTerms = (isTicked: boolean): boolean => {
        return isTicked;
    }

    const hasAllValidParams = (): boolean => {
        const hasValidName: boolean = validateName(name);
        const hasValidHandle: boolean = validateHandle(handle);
        const hasValidEmail: boolean = validateEmail(email);
        const hasValidPassword: boolean = validatePasswordRules(password);
        const passwordCompliesWithRules: boolean = validatePasswordRules(password);
        const passwordsMatch: boolean = validateMatchingPasswords(password);
        const hasAcceptedTerms: boolean = validateCheckedTerms(acceptedTerms);

        setErrorName(!hasValidName);
        setErrorHandle(!hasValidHandle);
        setErrorEmail(!hasValidEmail);
        setErrorPassword(!hasValidPassword) ;
        setErrorPasswordRules(!passwordCompliesWithRules);
        setErrorConfirmPass(!passwordsMatch);
        setErrorTerms(!hasAcceptedTerms);

        return hasValidName && hasValidHandle && hasValidEmail && hasValidPassword && 
            passwordCompliesWithRules && passwordsMatch && hasAcceptedTerms;
    }

    const handleGdprClick = () => {
        newWindowOf("gdpr");
    }

    return (
        <div className='top-padding full-center'>
            <div className="success-message">
                {!visibleForm && !loading && translationService.getFor(CHECK_YOUR_EMAIL_ACCOUNT_CREATE)}
            </div>
            {visibleForm && (
                <div>
                    <h2>{!loading && translationService.getFor(CREATE_USER)}</h2>
                    <form onSubmit={createUser}>
                        { /* Name */ }
                        {errorName && (
                            <div className="error-label-container">
                                <label className="label-create-error">{translationService.getFor(ERROR_NAME_NOT_EMPTY)}</label>
                            </div>
                        )}
                        <input className='wider-input' type='text' name='name' value={name} onChange={handleNameChange} placeholder={translationService.getFor(REGISTER_NAME)} /><br/>
                        { /* Handle */ }
                        {errorHandle && (
                            <div className="error-label-container">
                                <label className="label-create-error error-label-container">{translationService.getFor(ERROR_HANDLE_NOT_EMPTY)}</label>
                                
                            </div>
                        )}
                        <input className='wider-input' type='text' name='handle' value={handle} onChange={handleHandleChange} placeholder={translationService.getFor(REGISTER_HANDLE)} /><br/>
                        { /* E-Mail */ }
                        {errorEmail && (
                            <div className="error-label-container">
                                <label className="label-create-error error-label-container">{translationService.getFor(ERROR_EMAIL_NOT_EMPTY)}</label>
                                
                            </div>
                        )}
                        <input className='wider-input' type='email' name='email' value={email} onChange={handleEmailChange} placeholder={translationService.getFor(REGISTER_EMAIL)}/><br/>
                        { /* Password */ }
                        {errorPassword && (
                            <div className="error-label-container">
                                <label className="label-create-error">{translationService.getFor(ERROR_PASSWORD_NOT_EMPTY)}</label>
                            </div>
                        )}
                        {errorPasswordRules && (
                            <div className="error-label-container">
                                <label className="label-create-error">{translationService.getFor(ERROR_PASSWORD_RULES)}</label>
                            </div>
                        )}
                        <input className='wider-input' type='password' name='password' value={password} onChange={handlePasswordChange} placeholder={translationService.getFor(REGISTER_PASSWORD)}/><br/>
                        { /* Password Confirmation */ }
                        {errorConfirmPass && (
                            <div className="error-label-container">
                                <label className="label-create-error">{translationService.getFor(ERROR_PASSWORD_AND_CONFIRMATION_NOT_MATCHING)}</label>
                            </div>
                        )}
                        <input className='wider-input' type='password' name='confirmPassword' value={confirmPass} onChange={handleConfirmPassChange} placeholder={translationService.getFor(REGISTER_CONFIRM_PASSWORD)}/><br/><br/>
                        { /* Terms */ }
                        {errorTerms && (
                            <div className="error-label-container">
                                <label className="label-create-error">{translationService.getFor(ERROR_ACCEPT_TERMS_AND_CONDITIONS)}</label>
                            </div>
                        )}
                        <input type='checkbox' checked={acceptedTerms} onChange={handleTermsConditionsCheckboxChange} className='checkbox' /> 
                        <label onClick={handleGdprClick}>{translationService.getFor(TERMS_AND_CONDITIONS)}</label><br/><br/>
                        <button type='submit' className="thanker-button">{translationService.getFor(CREATE)}</button>
                    </form>
                </div>
            )}
            {loading && <div className="full-center"><Loader size="big" /></div>}
            <br/>
            <br/>
        </div>
    )

}