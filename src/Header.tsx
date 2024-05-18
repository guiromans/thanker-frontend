import { useState } from "react";
import { StorageService } from "./services/StorageService";
import { HEADER_ABOUT, HEADER_FOLLOWING, HEADER_LOGOUT, HEADER_SETTINGS, Language } from "./services/TranslationService";
import { languageOf } from "./utils/LanguageUtils";
import ReactFlagsSelect from "react-flags-select";
import { SearchPage } from "./SearchPage";
import './style/Fonts.css';
import './style/Header.css';
import './style/Styles.css';
import logoutIcon from '../src/assets/images/logout_icon.png';
import groupIcon from '../src/assets/images/group_icon.png';
import portalIcon from '../src/assets/images/portal_icon.png';
import settingsIcon from '../src/assets/images/settings_icon.png';
import HeaderIcon from "./cards/HeaderIcon";

export interface HeaderProps {
    userId: string | null | undefined;
    onLanguageChange: (language: Language) => void;
    onUserIdSelect: (userId: string) => void;
    onFollowingClick: () => void;
    onHomePageClick: () => void;
    onAboutClick: () => void;
    onSettingsClick: () => void;
    onLogoutClick: () => void;
    onLoadingUsers: (isLoading: boolean) => void;
}

export const Header = (props: HeaderProps) => {

    const storageService: StorageService = new StorageService();
    const [language, setLanguage] = useState<Language>(storageService.getLanguage());

    console.log("Header user ID", props.userId)

    const handleLanguageChange = (code: string) => {
        const lang: Language = languageOf(code);
        console.log("Selected language:", lang)
        setLanguage(lang);
        storageService.setLanguage(lang);
        props.onLanguageChange(lang);
    }

    const handleSearchClick = (userId: string | undefined) => {
        if (userId) {
            props.onUserIdSelect(userId);
        }
    }

    const userIdExists = (): boolean => {
        return props.userId !== undefined && props.userId !== null;
    }

    const handleSettingsClick = () => {
        props.onSettingsClick();
    }

    const handleLogoutClick = () => {
        props.onLogoutClick();
    }

    const handleLogoClick = () => {
        window.location.href = '/';
    }

    const handleAboutClick = () => {
        props.onAboutClick();
    }

    const resolveHeaderClasses = () => {
        const userId: string | null | undefined = props.userId;

        return userId && userId !== null ? "header shadow" : "header";
    }

    const handleFollowingClick = () => {
        props.onFollowingClick();
    }

    const handleLoading = (isLoading: boolean) => {
        props.onLoadingUsers(isLoading);
    }

    return (
        <div className='main fixed'>
            <div className={resolveHeaderClasses()}>
                <div className='header-left'>
                    <div className="header-left"><h1 className='logo' onClick={handleLogoClick}>Thanker</h1></div>
                    {userIdExists() && <HeaderIcon textKey={HEADER_FOLLOWING} language={language} imageSrc={groupIcon} onClick={handleFollowingClick} />}
                    {userIdExists() && <HeaderIcon textKey={HEADER_SETTINGS} language={language} imageSrc={settingsIcon} onClick={handleSettingsClick}/>}
                    {userIdExists() && <HeaderIcon textKey={HEADER_ABOUT} language={language} imageSrc={portalIcon} onClick={handleAboutClick} />}
                    {userIdExists() && <HeaderIcon textKey={HEADER_LOGOUT} language={language} imageSrc={logoutIcon} onClick={handleLogoutClick}/>}
                </div>
                <div className='header-right'>
                    {userIdExists() && 
                        <div className="search-text">
                            <SearchPage onClick={handleSearchClick} language={language} onLoading={handleLoading}/>
                        </div>}
                    <div>
                        <ReactFlagsSelect
                            fullWidth={false}
                            countries={Object.values(Language)}
                            customLabels={
                                {"PT": "PT", "GB": "EN"}
                            }
                            selected={language}
                            onSelect={handleLanguageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}