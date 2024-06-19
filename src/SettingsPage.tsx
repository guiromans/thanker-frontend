import { useEffect, useState } from 'react';
import { SettingItem } from './cards/SettingItem';
import { UserResponse } from './model/UserModel';
import { COULD_NOT_UPDATE_PROFILE_PRIVACY, DEFAULT_THANKS_PRIVACY_PRIVATE, DEFAULT_THANKS_PRIVACY_PUBLIC, Language, MADE_PROFILE_PRIVATE_TO_THANKS, MADE_PROFILE_PUBLIC_TO_THANKS, PROFILE_IS_OPEN_SETTING, PROFILE_NOT_OPEN_SETTING, TranslationService, YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE, YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC } from './services/TranslationService';
import { UserService } from './services/UserService';
import './style/Styles.css';
import { enqueueSnackbar } from 'notistack';
import { StorageService } from './services/StorageService';
import { PrivacyType } from './model/ThanksModel';
import { isMobile } from 'react-device-detect';

export interface SettingsProps {
    language: Language | undefined;
}

export const SettingsPage = (props: SettingsProps) => {

    const [user, setUser] = useState<UserResponse | null>(null);
    const [openProfileChecked, setOpenProfileChecked] = useState<boolean>()
    const [defaultPublicThanksChecked, setDefaultPublicThanksChecked] = useState<boolean>()

    const userService: UserService = new UserService;
    const translationService: TranslationService = new TranslationService();
    const storageService: StorageService = new StorageService();
    const userId: string = userService.getUserId()!;

    useEffect(() => {
        getUser();
        setDefaultPublicThanksChecked(resolveDefaultPrivacyType());
    }, []);

    useEffect(() => {
        setOpenProfileChecked(user?.isOpenProfile);
    }, [user]);

    const getUser = async() => {
        await userService.getUser(userId)
        .then(resp => setUser(resp.data as UserResponse));
    }

    const resolveDefaultPrivacyType = (): boolean => {
        return storageService.getDefaultThanksPrivacy() === PrivacyType.PUBLIC;
    }

    const handleSwitchedOpenProfile = (updatedChecked: boolean) => {
        userService.updateIsOpenProfile(updatedChecked)
            .then(() => enqueueSnackbar(`${translationService.getFor(resolveThanksPrivacyKeyBy(updatedChecked))}`, { variant: resolveToastTypeBy(updatedChecked)}))
            .catch(() => enqueueSnackbar(`${translationService.getFor(COULD_NOT_UPDATE_PROFILE_PRIVACY)}`, { variant: "error"}))
            .finally(() => setOpenProfileChecked(updatedChecked));
    }

    const handleSwitchPrivacyType = (updatedChecked: boolean) => {
        setDefaultPublicThanksChecked(updatedChecked);
        storageService.setDefaultThanksPrivacy(updatedChecked ? PrivacyType.PUBLIC : PrivacyType.PRIVATE);

        const key: string = updatedChecked ? YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC : YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE;

        enqueueSnackbar(`${translationService.getFor(key)}`, { variant: resolveToastTypeBy(updatedChecked)});
    }

    const resolveThanksPrivacyKeyBy = (checked: boolean): string => {
        return checked ? MADE_PROFILE_PUBLIC_TO_THANKS : MADE_PROFILE_PRIVATE_TO_THANKS;
    }
    
    const resolveToastTypeBy = (checked: boolean): "default" | "error" | "success" | "warning" | "info" | undefined => {
        return checked ? "success" : "info";
    }

    const resolveContainerClasses = (): string => {
        return `${isMobile ? "mobile" : "desktop"}`;
    }

    return(
        <div className={resolveContainerClasses()}>
            <SettingItem 
                isChecked={openProfileChecked}
                onSwitched={handleSwitchedOpenProfile}
                language={props.language}
                keyChecked={PROFILE_IS_OPEN_SETTING}
                keyUnchecked={PROFILE_NOT_OPEN_SETTING}
            />
            <SettingItem 
                isChecked={defaultPublicThanksChecked}
                onSwitched={handleSwitchPrivacyType}
                language={props.language}
                keyChecked={DEFAULT_THANKS_PRIVACY_PUBLIC}
                keyUnchecked={DEFAULT_THANKS_PRIVACY_PRIVATE}
            />
        </div>
    )

}