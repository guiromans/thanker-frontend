import { useEffect, useState } from "react";
import { AccountConfirmationService } from "./services/AccountConfirmationService";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { Loader } from "./cards/Loader";
import { ACCOUNT_CONFIRMATION_ERROR, ACCOUNT_CONFIRMATION_SUCCESS, ACCOUNT_IS_CONFIRMED, TranslationService } from "./services/TranslationService";
import thinking from "./assets/images/thinking.png";

export interface ConfirmationProps {
    onConfirmationDone: () => void;
}

export const AccountConfirmationPage = (props: ConfirmationProps) => {
    const params = useParams();
    const userId = params.userId;
    const confirmationId = params.confirmationId;

    const [confirming, setConfirming] = useState<boolean>(true);
    const [success, setSuccess] = useState<boolean>(false);
    
    const confirmationService: AccountConfirmationService = new AccountConfirmationService();
    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        console.log("Mounting account confirmation")
        confirmAccount();
    }, []);

    const confirmAccount = async() => {
        console.log("User id is", userId, "and confirmation id is", confirmationId)
        if (userId && confirmationId && confirming && !success) {
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

    if (confirming) {
        return (
            <div className="top-padding">
                <Loader size="big" />
            </div>
        )
    }

    return (
        <div className="top-padding">
            {success && translationService.getFor(ACCOUNT_IS_CONFIRMED)}
            {!success && !confirming && <img src={thinking} />}
        </div>
    )

}