import { useEffect, useRef, useState } from "react";
import { StorageService } from "./services/StorageService";
import { HEADER_ABOUT, HEADER_FOLLOWING, HEADER_LOGOUT, HEADER_SETTINGS, Language, SEARCH, SEARCH_USERS_HINT, THANKS, TranslationService } from "./services/TranslationService";
import { SearchPage } from "./SearchPage";
import './style/Fonts.css';
import './style/Header.css';
import './style/Styles.css';
import logoutIcon from '../src/assets/images/logout_icon.png';
import groupIcon from '../src/assets/images/group_icon.png';
import portalIcon from '../src/assets/images/portal_icon.png';
import settingsIcon from '../src/assets/images/settings_icon.png';
import HeaderIcon from "./cards/HeaderIcon";
import { isMobile } from "react-device-detect";
import { LanguageFlags } from "./cards/LanguageFlags";
import styled from "styled-components";

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

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const Bar = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
`;

const DropdownMenu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 10vh;
  right: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: 15%;
  margin-right: 15%;

  & .header-label {
    padding: 12px 16px;
    display: block;
    color: black;
    text-decoration: none;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const Header = (props: HeaderProps) => {

    const storageService: StorageService = new StorageService();
    const translationService: TranslationService = new TranslationService();
    const [language, setLanguage] = useState<Language>(storageService.getLanguage());
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            hideMenu();
          }
        };
    
        if (openMenu) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [openMenu]);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
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
        hideMenu();
    }

    const handleLogoutClick = () => {
        props.onLogoutClick();
        hideMenu();
    }

    const handleLogoClick = () => {
        window.location.href = '/';
    }

    const handleAboutClick = () => {
        props.onAboutClick();
        hideMenu();
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

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    }

    const hideMenu = () => {
        setOpenMenu(false);
    }

    if (true) { // isMobile
        return (
            <div className={resolveHeaderClasses()}>
                <div><h1 className='logo' onClick={handleLogoClick}>Thanker</h1></div>
                {userIdExists() && (
                    <div>
                        <HamburgerButton onClick={handleMenuClick} ref={buttonRef}>
                          <Bar />
                          <Bar />
                          <Bar />
                        </HamburgerButton>
                        <DropdownMenu open={openMenu} ref={menuRef}>
                          <label className="header-label" onClick={handleLogoClick}>{translationService.getFor(THANKS)}</label>
                          <label className="header-label" onClick={handleSettingsClick}>{translationService.getFor(HEADER_SETTINGS)}</label>
                          <label className="header-label" onClick={handleAboutClick}>{translationService.getFor(HEADER_ABOUT)}</label>
                          <label className="header-label" onClick={handleLogoutClick}>{translationService.getFor(HEADER_LOGOUT)}</label>
                        </DropdownMenu>
                    </div>
                    )}
                    <div><LanguageFlags onLanguageChange={handleLanguageChange} /></div>
            </div>
        )
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
                    <LanguageFlags onLanguageChange={handleLanguageChange} />
                </div>
            </div>
        </div>
    );

}