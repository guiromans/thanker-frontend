import { ChangeEvent, useState } from "react";
import { AuthService } from "./services/AuthService";
import { ErrorResponse, useNavigate } from "react-router-dom";
import './style/Fonts.css';
import './style/Styles.css';
import './style/Login.css';
import { CREATE_USER, ERROR_GOOGLE_LOGIN, ERROR_LOGIN_MSG, ERROR_SERVER_COMMS, LOGIN, MAKE_YOUR_DAY, NEW_CONFIRMATION, PASSWORD, RESET_PASSWORD, TranslationService } from "./services/TranslationService";
import { AuthResponse } from "./model/AuthResponse";
import { ThankerIntro } from "./cards/ThankerIntro";
import { Loader } from "./cards/Loader";
import { enqueueSnackbar } from "notistack";
import { isMobile } from "react-device-detect";
import { PasswordCard } from "./cards/PasswordCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { StorageService } from "./services/StorageService";

export interface LoginProps {
  onLogged: () => void;
}

export const LoginPage: React.FC<LoginProps> = ({onLogged}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const navigate = useNavigate();

    const authService: AuthService = new AuthService();
    const translationService: TranslationService = new TranslationService();
    const storageService: StorageService = new StorageService();

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    }

    const handlePasswordChange = (updatedPwd: string) => {
      setPassword(updatedPwd);
    }

    const performLogin = async(event: React.FormEvent) => {
      event.preventDefault();

      setAuthenticating(true);
      
      await authService.login(email, password)
        .then((resp) => {
          const authResponse: AuthResponse = resp.data as AuthResponse;
          authService.saveTokensFrom(authResponse);
          onLogged();
        })
        .catch((e) => {
          const error: ErrorResponse = e.response;
          const errorKey: string = error && error.status && error.status === 400 ? ERROR_LOGIN_MSG : ERROR_SERVER_COMMS;
          enqueueSnackbar(`${translationService.getFor(errorKey)}`, { variant: 'error' })
        })
        .finally(() => setAuthenticating(false));
    }

    const openRegisterPage = () => {
      navigate('/users/create');
    }

    const openResetPasswordPage = () => {
      navigate('/users/reset-password');
    }

    const requestNewConfirmation = () => {
      navigate('/users/new-confirmation');
    }

    const resolveOptionsClass = () => {
      return isMobile ? "options-mobile" : "options";
    }

    const onGoogleLoginSuccess = async(credentialResponse: CredentialResponse) => {
      if (credentialResponse.credential) {
        setAuthenticating(true);
        const credential: string = credentialResponse.credential

        await authService.loginWithGoogle(credential, storageService.getLanguage())
          .then((resp) => {
            const authResponse: AuthResponse = resp.data as AuthResponse;
            authService.saveTokensFrom(authResponse);
            onLogged();
          })
          .catch((e) => {
            const error: ErrorResponse = e.response;
            const errorKey: string = error && error.status && error.status === 400 ? ERROR_LOGIN_MSG : ERROR_SERVER_COMMS;
            enqueueSnackbar(`${translationService.getFor(errorKey)}`, { variant: 'error' })
          })
          .finally(() => setAuthenticating(false));

      } else {
        displayGoogleLoginFail();
      }
    }

    const onGoogleLoginFail = () => {
      displayGoogleLoginFail();
    }

    const displayGoogleLoginFail = () => {
      enqueueSnackbar(`${translationService.getFor(ERROR_GOOGLE_LOGIN)}`, { variant: 'error' })
    }
    
    // Login form and logic
    return (
      <div className='main top-padding main-login page-bottom'>
        <div>
          <h2 className='subtitle'>{translationService.getFor(MAKE_YOUR_DAY)}</h2>
        </div>
        <br/>
        <form onSubmit={performLogin} method='POST'>
          <input 
            type='email' 
            name='email' 
            value={email} 
            onChange={handleEmailChange}
            placeholder="E-Mail"
            className="smaller-input"
          /><br/>
          <PasswordCard onPasswordUpdate={handlePasswordChange} className="smaller-input" disabled={authenticating} placeholder={translationService.getFor(PASSWORD)} />
          <br/>
          {!authenticating && <button type='submit' className="thanker-button">{translationService.getFor(LOGIN)}</button>}
          {authenticating && <div className='centerish'><Loader size="small" /></div>}
        </form>
        <div className="login-google">
          <GoogleLogin shape="pill" onSuccess={onGoogleLoginSuccess} onError={onGoogleLoginFail} />
        </div>
        <div className={resolveOptionsClass()}>
          {!authenticating && <a className='label-link' onClick={openRegisterPage}>{translationService.getFor(CREATE_USER)}</a>}
          {!authenticating && <a className='label-link' onClick={openResetPasswordPage}>{translationService.getFor(RESET_PASSWORD)}</a>}
          {!authenticating && <a className='label-link' onClick={requestNewConfirmation}>{translationService.getFor(NEW_CONFIRMATION)}</a>}
        </div>
        <ThankerIntro />
        <div>
          {!authenticating && <a href="mailto:beatrue@thanker.co">beatrue@thanker.co</a>}
        </div>
      </div>
    );
   
};