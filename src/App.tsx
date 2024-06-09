import { UserPage } from './UserPage';
import { LoginPage } from './LoginPage';
import { AuthService } from './services/AuthService';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AccountConfirmationPage } from './AccountConfirmationPage';
import { CreateUserPage } from './CreateUserPage';
import { RequestResetPasswordPage } from './RequestResetPasswordPage';
import { LogoutPage } from './LogoutPage';
import { ResetPasswordPage } from './ResetPasswordPage';
import { Header } from './Header';
import { NotFound } from './NotFound';
import { Language } from './services/TranslationService';
import { StorageService } from './services/StorageService';
import './style/Styles.css';
import { Loader } from './cards/Loader';
import { About } from './About';
import './style/Scrollbar.css';
import './style/Styles.css';
import { SnackbarProvider } from 'notistack';
import { FollowingPage } from './FollowingPage';
import { UserResponse } from './model/UserModel';
import { RequestNewConfirmationPage } from './RequestNewConfirmationPage';
import { SettingsPage } from './SettingsPage';
import { GDPRCard } from './cards/GDPRCard';
import React from 'react';

const App = () => {
  const authService = new AuthService();
  const storageService: StorageService = new StorageService();
  const [userId, setUserId] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState<Language>(storageService.getLanguage());
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchUserId();    
  }, []);

  const hasValidToken = (): boolean => {
    const isValidToken: boolean = authService.isTokenValid();

    if (!isValidToken && authService.haveTokens()) {
      handleLogout();
    }

    return isValidToken;
  }

  const fetchUserId = () => {
    setUserId(authService.readUserIdFromToken());
    setLoading(false);
  }

  const handleLogged = () => {
    fetchUserId();
  }

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
  }

  const handleHomePageClick = () => {
    setUserId(authService.readUserIdFromToken());
    goToHome();
  }

  const handleAboutClick = () => {
    window.location.href = '/#/about';
  }

  const goToHome = () => {
    window.location.href = '/';
  }

  const handleLogout = () => {
    setLoading(true);
    setLoggingOut(true);
    setTimeout(() => {
      setUserId(null);
      authService.logout();
      setLoading(false);
      setLoggingOut(false);
    }, 500);
  }

  const handleClickedOnUser = (userId: string) => {
    window.location.hash = `/users/${userId}`;
    window.location.reload();
    setUserId(userId);
  }

  const handleFollowingClick  = (user: UserResponse) => {
    handleClickedOnUser(user.id);
  }

  const handleSearchedUserSelect = (userId: string) => {
    handleClickedOnUser(userId);
  }

  const handleFollowingSelect = () => {
    window.location.href = '/#/following';
  }

  const openMainPage = () => {
    window.location.href = "/";
  }

  const handleLoadingUsers = (isLoading: boolean) => {
    setLoadingUsers(isLoading);
  }

  const handleSettingsClick = () => {
    window.location.href = "/#/settings";
  }

  const handleUserNotFound = () => {
    window.location.hash = "/not-found";
  }

  if (loading) {
    return (
      <div className='main'>
        {loggingOut && (<Header 
          onLanguageChange={handleLanguageChange} 
          onUserIdSelect={handleSearchedUserSelect}
          onFollowingClick={handleFollowingSelect}
          onHomePageClick={handleHomePageClick}
          onLoadingUsers={handleLoadingUsers}
          onSettingsClick={handleSettingsClick}
          onAboutClick={handleAboutClick}
          onLogoutClick={handleLogout}
          userId={userId}
        />)
        }
        <div className='top-padding loader-confirmations'>
          <Loader size="big" />
        </div>
      </div>
      
    )
  };

  return (
    <div className='main'>
      <SnackbarProvider maxSnack={3}>
        <Header 
          onLanguageChange={handleLanguageChange} 
          onUserIdSelect={handleSearchedUserSelect}
          onHomePageClick={handleHomePageClick}
          onFollowingClick={handleFollowingSelect}
          onLoadingUsers={handleLoadingUsers}
          onSettingsClick={handleSettingsClick}
          onAboutClick={handleAboutClick}
          onLogoutClick={handleLogout}
          userId={userId}
        />
        <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/" element={hasValidToken() ? <UserPage userId={userId} language={language} loadingUsers={loadingUsers} onUserNotFound={handleUserNotFound}/> : <LoginPage onLogged={handleLogged} /> } />
            <Route path="/login" element={!hasValidToken() ? <LoginPage onLogged={handleLogged}/> : <UserPage userId={userId} language={language}  loadingUsers={loadingUsers} onUserNotFound={handleUserNotFound}/>} />
            <Route path="/users/" element={hasValidToken() ? <UserPage userId={userId} language={language}  loadingUsers={loadingUsers} onUserNotFound={handleUserNotFound}/> : <LoginPage onLogged={handleLogged} />} />
            <Route path="/users/:userId" element={hasValidToken() ? <UserPage userId={undefined} language={language}  loadingUsers={loadingUsers} onUserNotFound={handleUserNotFound}/> : <LoginPage onLogged={handleLogged} />} />
            <Route path="/users/:userId/activate/:confirmationId" element={<AccountConfirmationPage onConfirmationDone={openMainPage} />} />
            <Route path="/users/create" element={<CreateUserPage language={language} onUserCreated={openMainPage}/>} />
            <Route path="/users/reset-password" element={<RequestResetPasswordPage language={language} onResetRequested={openMainPage} />} />
            <Route path="/users/new-confirmation" element={<RequestNewConfirmationPage language={language} onResetRequested={openMainPage} />} />
            <Route path="/users/:userId/reset-password/:resetPasswordId" element={<ResetPasswordPage onError={openMainPage} />} />
            <Route path="/following" element={<FollowingPage userId={userId} onClick={handleFollowingClick} language={language} />} />
            <Route path="/settings" element={<SettingsPage language={language} />} />
            <Route path="/gdpr" element={<GDPRCard language={language} />} />
            <Route path="/about" element={!hasValidToken() ? <LoginPage onLogged={handleLogged}/> : <About language={language} />} />
            <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
        </React.StrictMode>
        </SnackbarProvider>
    </div>  
  );

};

export default App;