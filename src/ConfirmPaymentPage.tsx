import { useEffect, useState } from "react";
import { PaymentsService } from "./services/PaymentsService";
import { Language, SUBSCRIPTION_BEING_CONFIRMED, SUBSCRIPTION_ERROR, SUBSCRIPTION_HAS_BEEN_CONFIRMED, TranslationService } from "./services/TranslationService";
import { Loader } from "./cards/Loader";
import './style/PaymentConfirmation.css';
import './style/Styles.css';
import { isMobile } from "react-device-detect";

export interface ConfirmationPageProps {
    language: Language | undefined;
    onConfirmationTaskDone(): void;
}

export const ConfirmPaymentPage: React.FC<ConfirmationPageProps> = (props: ConfirmationPageProps) => {

    const paymentsService: PaymentsService = new PaymentsService();
    const translationService: TranslationService = new TranslationService();

    const [loading, setLoading] = useState<boolean>(true);
    const [classStatus, setClassStatus] = useState<string>("ok-container");
    const [message, setMessage] = useState<string>(translationService.getFor(SUBSCRIPTION_BEING_CONFIRMED));

    useEffect(() => {
        confirmPayment();
    }, []);

    const confirmPayment = async() => {
        await paymentsService.confirmPayment()
            .then(() => {
                setMessage(translationService.getFor(SUBSCRIPTION_HAS_BEEN_CONFIRMED));
                setLoading(false);
            })
            .catch((e) => {
                setMessage(translationService.getFor(SUBSCRIPTION_ERROR))
                setClassStatus("error-container");
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => {
                    props.onConfirmationTaskDone();
                }, 2000);
            });
    }

    const resolveContainerClasses = (): string => {
        return `container-confirmation container-confirmation-${isMobile ? "mobile" : "desktop"}`;
    }

    return (
        <div className="top-padding">
            <div className={`${resolveContainerClasses()} ${classStatus}`}>
                <div>{message}</div>
                {loading && <div><Loader size="small" /></div>}
            </div>
        </div>
    )

}