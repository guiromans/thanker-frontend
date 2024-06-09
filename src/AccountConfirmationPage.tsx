import { useEffect, useRef, useState } from "react";
import { AccountConfirmationService } from "./services/AccountConfirmationService";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { Loader } from "./cards/Loader";
import { ACCOUNT_CONFIRMATION_ERROR, ACCOUNT_CONFIRMATION_SUCCESS, ACCOUNT_IS_CONFIRMED, TranslationService } from "./services/TranslationService";
import thinking from "./assets/images/thinking.png";
import React from "react";
import './style/Styles.css';

export interface ConfirmationProps {
    onConfirmationDone: () => void;
}

const AccountConfirmationPage: React.FC<ConfirmationProps> = (props: ConfirmationProps) => {
    const params = useParams();
    const userId = params.userId;
    const confirmationId = params.confirmationId;

    const [confirming, setConfirming] = useState<boolean>(true);
    const [success, setSuccess] = useState<boolean>(false);
    const count = useRef<number | null>(null);
    
    const confirmationService: AccountConfirmationService = new AccountConfirmationService();
    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        if (count.current === null) {
            confirmAccount();
        }

        // So that we don't run "confirmAccount" twice
        return () => { count.current = 1; }
    }, []);

    const confirmAccount = async() => {
        console.log("Going to confirm account",params, userId, confirmationId, confirming, success)
        if (userId && confirmationId) {
            await confirmationService.confirmAccount(userId, confirmationId)
                .then(() => {
                    enqueueSnackbar(translationService.getFor(ACCOUNT_CONFIRMATION_SUCCESS), { variant: 'success'});
                    setSuccess(true);
                })
                .catch(() => enqueueSnackbar(translationService.getFor(ACCOUNT_CONFIRMATION_ERROR), { variant: 'error'}))
                .finally(() => {
                    setConfirming(false);
                    setTimeout(() => {
                        props.onConfirmationDone();
                    }, 3000);
                })
        }        
    }

    return (
        <div className="top-padding">
            {confirming && <div className="loader-confirmations"><Loader size="big" /></div>}
            {success && translationService.getFor(ACCOUNT_IS_CONFIRMED)}
            {!success && !confirming && <img src={thinking} />}
        </div>
    )

}

export default React.memo(AccountConfirmationPage);