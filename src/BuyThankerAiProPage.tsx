import { useState } from "react";
import { AI_PRO_DAILY_GRATITUDE_AI, AI_PRO_HIDE_ADS, AI_PRO_HINT, AI_PRO_INSIGHTS, AI_PRO_PSEUDO_CELEBRITY_QUOTE, AI_PRO_REVERIFY_SUBSCRIPTION, AI_PRO_SEND_DAILY_EMAIL, AI_PRO_SUBSCRIBE, AI_PRO_TAILORED_MESSAGES, Language, MONTH_KEY, SUBSCRIPTION_ERROR_LOADING_SESSION, SUBSCRIPTION_ERROR_VERIFYING_SUBSCRIPTION, TranslationService } from "./services/TranslationService";
import '../src/style/AiPro.css';
import '../src/style/Styles.css';
import { isMobile } from "react-device-detect";
import { AiProItem } from "./cards/AiPromItem";
import lightbulb from '../src/assets/images/lightbulb.png';
import messageIcon from '../src/assets/images/message.png';
import sendIcon from '../src/assets/images/send.png';
import happyIcon from '../src/assets/images/happy.png';
import hideIcon from '../src/assets/images/hide.png';
import { resolveContainerClass, resolveMainContainerClasses, resolveSubTitleClasses, resolveTitleClasses } from "./utils/AiProUtils";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_KEY } from "./Constants";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { Session } from "./model/PaymentsModel";
import { PaymentsService } from "./services/PaymentsService";
import { enqueueSnackbar } from "notistack";
import { Loader } from "./cards/Loader";

export interface AiProps {
    language: Language | undefined;
}

const stripePromise = loadStripe(STRIPE_KEY, {
});

export const BuyThankerAiProPage: React.FC<AiProps> = (props: AiProps) => {

    const translationService: TranslationService = new TranslationService();
    const paymentsService: PaymentsService = new PaymentsService();

    const [language, setlanguage] = useState<Language|undefined>(props.language);
    const [showPayment, setShowPayment] = useState<boolean>(false);
    const [session, setSession] = useState<Session|undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const resolveButtonClasses = (): string => {
        return `ai-pro-subscribe-button ai-pro-subscribe-button-${isMobile ? "mobile" : "desktop"}`;
    }

    const handleSubscribeClick = async(event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        await paymentsService.createSession()
            .then(resp => {
                const session: Session = resp.data as Session;
                setSession(session);
                setShowPayment(true);
            })
            .catch(() => enqueueSnackbar(translationService.getFor(SUBSCRIPTION_ERROR_LOADING_SESSION), { variant: 'error' }))
            .finally(() => setLoading(false))
    }

    const handleReverifyClick = async() => {
        setLoading(true);
        await paymentsService.confirmPayment()
            .then(() => window.location.reload())
            .catch(() => {
                enqueueSnackbar(translationService.getFor(SUBSCRIPTION_ERROR_VERIFYING_SUBSCRIPTION), { variant: 'error' });
                setLoading(false);
            })
    }

    return (
        <div className={resolveMainContainerClasses("buy")}>
            <div className={resolveTitleClasses()}>
                {translationService.getFor("Thanker AI Pro™")}
            </div>
            {loading && <div className="loader-payment"><Loader size="big"/></div>}
            <div className={resolveSubTitleClasses()}>
                {translationService.getFor(AI_PRO_DAILY_GRATITUDE_AI)}
            </div>
            <div className={resolveContainerClass()}>
                <AiProItem language={language} textKey={AI_PRO_INSIGHTS} icon={lightbulb} />
                <AiProItem language={language} textKey={AI_PRO_TAILORED_MESSAGES} icon={messageIcon} />
                <AiProItem language={language} textKey={AI_PRO_SEND_DAILY_EMAIL} icon={sendIcon} />
                <AiProItem language={language} textKey={AI_PRO_PSEUDO_CELEBRITY_QUOTE} icon={happyIcon} />
                <AiProItem language={language} textKey={AI_PRO_HIDE_ADS} icon={hideIcon} />
                
                {   !showPayment && !loading && (
                    <div>
                        <div className="ai-pro-price">
                        ✨ 2.99€/{translationService.getFor(MONTH_KEY)} 💫
                        </div>
                        <form className="ai-pro-form" onSubmit={handleSubscribeClick}>
                            <button type='submit' className={resolveButtonClasses()}>
                                {translationService.getFor(AI_PRO_SUBSCRIBE)}
                            </button>
                        </form>
                    </div>
                    )
                }
                {
                    showPayment && session &&
                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{
                            clientSecret: session.clientSecret
                        }}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                }
            </div>
            {!loading && (
                <div className="reverify-susbcription-container">
                    <label className="reverify-label" onClick={handleReverifyClick}>
                        {translationService.getFor(AI_PRO_REVERIFY_SUBSCRIPTION)}
                    </label>
                </div>
            )}
        </div>
    )

}