import { useEffect, useState } from "react";
import { AccountConfirmationService } from "./services/AccountConfirmationService";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export interface ConfirmationProps {
    onConfirmationDone: () => void;
}

export const AccountConfirmationPage = (props: ConfirmationProps) => {
    const params = useParams();
    const userId = params.userId;
    const confirmationId = params.confirmationId;

    const [confirming, setConfirming] = useState<boolean>(true);
    const [unconfirmedMessage, setUnconfirmedMessage] = useState<string>('Confirming account...')
    
    const confirmationService: AccountConfirmationService = new AccountConfirmationService();

    useEffect(() => {
        confirmAccount();
    }, []);

    const confirmAccount = async() => {
        if (userId && confirmationId) {
            await confirmationService.confirmAccount(userId, confirmationId)
                .then(() => {
                    setConfirming(false);
                    enqueueSnackbar("Account confirmed!", { variant: 'success'});
                })
                .catch((e) => enqueueSnackbar("Error confirming account. Account was already confirmed, or it's passed the confirmation time.<br>"
                    + "Please request a new confirmation in the link below:", { variant: 'error'}))
                .finally(() => {
                    setTimeout(() => {
                        props.onConfirmationDone();
                    }, 2000);
                })
        }        
    }

    if (confirming) {
        return (
            <div>{unconfirmedMessage}</div>
        )
    }

    return (
        <div className="top-padding">Account is confirmed. Thank you!</div>
    )

}