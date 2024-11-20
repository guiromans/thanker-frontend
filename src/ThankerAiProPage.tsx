import React, { useEffect, useState } from "react";
import { Language } from "./services/TranslationService"
import { UserService } from "./services/UserService";
import { IsSubscriberResponse, PremiumStatus, UserResponse } from "./model/UserModel";
import '../src/style/Styles.css';
import { Loader } from "./cards/Loader";
import { isMobile } from "react-device-detect";
import { BuyThankerAiProPage } from "./BuyThankerAiProPage";
import { resolveTopPadding } from "./utils/AiProUtils";
import { AiProPage } from "./AiProPage";

export interface AiProProps {
    language: Language | undefined;
}

const ThankerAiProPage: React.FC<AiProProps> = (props: AiProProps) => {

    const userService: UserService = new UserService();
    const [isPremium, setIsPremium] = useState<boolean|undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userId] = useState<string>(userService.getUserId()!);
    

    useEffect(() => {
        checkIsUserPremium();
    }, []);

    const checkIsUserPremium = async() => {
        await userService.isSubscriber()
            .then((resp) => {
                const subscriberResp: IsSubscriberResponse = resp.data as IsSubscriberResponse;
                setIsPremium(subscriberResp.isSubscriber);
            })
            .catch(() => setIsPremium(false))
            .finally(() => setIsLoading(false));
    }

    if (isLoading || isPremium === undefined) {
        return(
            <div className={resolveTopPadding()}>
                <Loader size="massive" />
            </div>
        )
    }

    if (!isPremium) {
        return (
            <div>
                <BuyThankerAiProPage language={props.language} />
            </div>
        )
    }

    return(
        <div>
            <AiProPage language={props.language} />
        </div>
    )

}

export default React.memo(ThankerAiProPage);