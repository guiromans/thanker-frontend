import { useEffect, useState } from 'react';
import { SettingItem } from './cards/SettingItem';
import { SoftCancelResponse, UserResponse } from './model/UserModel';
import { AI_PRO_SUBSCRIBER, COULD_NOT_UPDATE_PROFILE_PRIVACY, DEFAULT_HIDE_ADS_FALSE, DEFAULT_HIDE_ADS_TRUE, DEFAULT_THANKS_PRIVACY_PRIVATE, DEFAULT_THANKS_PRIVACY_PUBLIC, Language, MADE_PROFILE_PRIVATE_TO_THANKS, MADE_PROFILE_PUBLIC_TO_THANKS, PROFILE_IS_OPEN_SETTING, PROFILE_NOT_OPEN_SETTING, SUBSCRIPTION_ALREADY_CANCELLED_MESSAGE, SUBSCRIPTION_ALREADY_REACTIVATED_MESSAGE, SUBSCRIPTION_CANCEL, SUBSCRIPTION_CANCELLED_MESSAGE, SUBSCRIPTION_CHANGE_PAYMENT_SETTINGS, SUBSCRIPTION_REACTIVATE, SUBSCRIPTION_REACTIVATED_MESSAGE, SUBSCRIPTION_SURE_TO_CANCEL, SUBSCRIPTION_SURE_TO_REACTIVATE, TranslationService, YOUR_DEFAULT_HIDE_ADS_FALSE, YOUR_DEFAULT_HIDE_ADS_TRUE, YOUR_DEFAULT_THANKS_PRIVACY_PRIVATE, YOUR_DEFAULT_THANKS_PRIVACY_PUBLIC } from './services/TranslationService';
import { UserService } from './services/UserService';
import './style/Styles.css';
import { enqueueSnackbar } from 'notistack';
import { StorageService } from './services/StorageService';
import { PrivacyType } from './model/ThanksModel';
import { isMobile } from 'react-device-detect';
import { SettingLabel } from './cards/SettingLabel';
import cardIcon from '../src/assets/images/card.png';
import cancelIcon from '../src/assets/images/cancel.png';
import reactivateIcon from '../src/assets/images/activate.png';
import { PaymentsService } from './services/PaymentsService';
import { Modal } from './cards/Modal';
import { Loader } from './cards/Loader';
import { ErrorResponse } from './model/ErrorResponse';
import { PaymentUpdateResponse } from './model/PaymentsModel';

export interface SettingsProps {
    language: Language | undefined;
}

enum SubscriptionInteractionType {
    CANCEL, REACTIVATE
}

export const SettingsPage = (props: SettingsProps) => {

    const userService: UserService = new UserService;
    const translationService: TranslationService = new TranslationService();
    const storageService: StorageService = new StorageService();
    const paymentsService: PaymentsService = new PaymentsService();

    const [user, setUser] = useState<UserResponse | null>(null);
    const [isAiPro, setIsAiPro] = useState<boolean>(false);
    const [openProfileChecked, setOpenProfileChecked] = useState<boolean>()
    const [defaultPublicThanksChecked, setDefaultPublicThanksChecked] = useState<boolean>()
    const [hideAds, setHideAds] = useState<boolean>(storageService.getHideAds());
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>();
    const [subscriptionInteractionType, setSubscriptionInteractionType] = useState<SubscriptionInteractionType>();
    const [hasSoftCancel, setHasSoftCancel] = useState<boolean>();

    const userId: string = userService.getUserId()!;

    useEffect(() => {
        getUser();
        setDefaultPublicThanksChecked(resolveDefaultPrivacyType());
        resolveSoftCancel();
    }, []);

    useEffect(() => {
        setOpenProfileChecked(user?.isOpenProfile);
    }, [user]);

    const getUser = async() => {
        await userService.getUser(userId)
        .then(resp => {
            const respUser: UserResponse = resp.data as UserResponse;
            setUser(respUser);
            setIsAiPro(respUser.premiumStatus.toString() === "ACTIVE");
        });
    }

    const resolveSoftCancel = async() => {
        await userService.hasSoftCancel()
            .then((resp) => {
                const response: SoftCancelResponse = resp.data as SoftCancelResponse;
                setHasSoftCancel(response.softCancel);
            })
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

    const handleSwitchHideAds = (updatedChecked: boolean) => {
        setHideAds(updatedChecked);
        storageService.setHideAds(updatedChecked);

        const key: string = updatedChecked ? YOUR_DEFAULT_HIDE_ADS_TRUE : YOUR_DEFAULT_HIDE_ADS_FALSE;

        enqueueSnackbar(`${translationService.getFor(key)}`, { variant: resolveToastTypeBy(updatedChecked)});
    }

    const resolveThanksPrivacyKeyBy = (checked: boolean): string => {
        return checked ? MADE_PROFILE_PUBLIC_TO_THANKS : MADE_PROFILE_PRIVATE_TO_THANKS;
    }
    
    const resolveToastTypeBy = (checked: boolean): "default" | "error" | "success" | "warning" | "info" | undefined => {
        return checked ? "success" : "info";
    }

    const resolveContainerClasses = (): string => {
        return `top-padding settings-container ${isMobile ? "mobile" : "desktop"}`;
    }

    const handlePaymentChangeClick = async() => {
        setLoading(true);
        await paymentsService.requestPaymentDetailsUpdate()
            .then((resp) => {
                const response: PaymentUpdateResponse = resp.data as PaymentUpdateResponse;
                const url: string = response.url;
                window.open(url, '_blank', 'noopener,noreferrer');
            })
            .finally(() => setLoading(false));
    }

    const handleCancelSubscriptionClick = () => {
        setSubscriptionInteractionType(SubscriptionInteractionType.CANCEL);
        setModalText(translationService.getFor(SUBSCRIPTION_SURE_TO_CANCEL))
        setShowModal(true);
    }

    const handleConfirm = async() => {
        setShowModal(false);
        setLoading(true);
        
        switch (subscriptionInteractionType) {
            case SubscriptionInteractionType.CANCEL: cancelSubscription(); break;
            case SubscriptionInteractionType.REACTIVATE: reactivateSubscription(); break;
        }
    }

    const handleCancel = () => {
        setShowModal(false);
        setSubscriptionInteractionType(undefined);
    }

    const handleReactivateSubscriptionClick = () => {
        setSubscriptionInteractionType(SubscriptionInteractionType.REACTIVATE);
        setModalText(translationService.getFor(SUBSCRIPTION_SURE_TO_REACTIVATE))
        setShowModal(true);
    }

    const cancelSubscription = async() => {
        await paymentsService.cancelSubscription()
            .then(() => {
                enqueueSnackbar(translationService.getFor(SUBSCRIPTION_CANCELLED_MESSAGE), { 'variant': 'success' })
                setHasSoftCancel(true);
            })
            .catch((e) => {
                const error: ErrorResponse = e.response.data as ErrorResponse;

                if (error.status === 404) {
                    enqueueSnackbar(translationService.getFor(SUBSCRIPTION_ALREADY_CANCELLED_MESSAGE), { 'variant': 'error' });
                }
            })
            .finally(() => {
                setLoading(false)
                setSubscriptionInteractionType(undefined);    
            });
    }

    const reactivateSubscription = async() => {
        await paymentsService.reactivateSubscription()
            .then(() => {
                enqueueSnackbar(translationService.getFor(SUBSCRIPTION_REACTIVATED_MESSAGE), { 'variant': 'success' })
                setHasSoftCancel(false);
            })
            .catch((e) => {
                const error: ErrorResponse = e.response.data as ErrorResponse;

                if (error.status === 404) {
                    enqueueSnackbar(translationService.getFor(SUBSCRIPTION_ALREADY_REACTIVATED_MESSAGE), { 'variant': 'error' });
                }
            })
            .finally(() => {
                setLoading(false)
                setSubscriptionInteractionType(undefined);    
            });
    }

    return(
        <div>
            <Modal
                message={modalText}
                isVisible={showModal}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                language={props?.language}
            />
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
                <br/>
                <br/>
                {isAiPro && <div className='premium-header'>{translationService.getFor(AI_PRO_SUBSCRIBER)}</div> }
                {
                    isAiPro &&
                        <div>
                            <SettingItem 
                                isChecked={hideAds}
                                onSwitched={handleSwitchHideAds}
                                language={props.language}
                                keyChecked={DEFAULT_HIDE_ADS_TRUE}
                                keyUnchecked={DEFAULT_HIDE_ADS_FALSE}
                            />
                            <SettingLabel
                                icon={cardIcon}
                                text={translationService.getFor(SUBSCRIPTION_CHANGE_PAYMENT_SETTINGS)}
                                onClick={handlePaymentChangeClick}
                            />
                            {!hasSoftCancel && (<SettingLabel
                                icon={cancelIcon}
                                text={translationService.getFor(SUBSCRIPTION_CANCEL)}
                                onClick={handleCancelSubscriptionClick}
                            />)}
                            {hasSoftCancel && (<SettingLabel
                                icon={reactivateIcon}
                                text={translationService.getFor(SUBSCRIPTION_REACTIVATE)}
                                onClick={handleReactivateSubscriptionClick}
                            />)}
                            {loading && <div className='centerish'><Loader size="small" /></div> }
                        </div>
                }
            </div>
        </div>
    )

}