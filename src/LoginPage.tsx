import { ChangeEvent, useState } from "react";
import { AuthService } from "./services/AuthService";
import { ErrorResponse, useNavigate } from "react-router-dom";
import './style/Fonts.css';
import './style/Styles.css';
import './style/Login.css';
import { CREATE_USER, ERROR_LOGIN_MSG, ERROR_SERVER_COMMS, LOGIN, MAKE_YOUR_DAY, NEW_CONFIRMATION, PASSWORD, RESET_PASSWORD, TranslationService } from "./services/TranslationService";
import { AuthResponse } from "./model/AuthResponse";
import { ThankerIntro } from "./cards/ThankerIntro";
import { Loader } from "./cards/Loader";
import { enqueueSnackbar } from "notistack";

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

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
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
    
    // Login form and logic
    return (
      <div className='main top-padding'>
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
          <input 
            type='password' 
            name='password' 
            value={password} 
            onChange={handlePasswordChange}
            placeholder={translationService.getFor(PASSWORD)}
            className="smaller-input"
          /><br/><br/>
          {!authenticating && <button type='submit' className="thanker-button">{translationService.getFor(LOGIN)}</button>}
          {authenticating && <div className='centerish'><Loader size="small" /></div>}
        </form>
        <div className="options">
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