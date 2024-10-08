import { useEffect, useState } from 'react';
import { BE_THE_FIRST_THANKER, FOLLOW_TO_SEE_THANKS, Language, THIS_IS_PRIVATE_PROFILE, TranslationService } from '../services/TranslationService';
import '../style/NoThanks.css';
import { isMobile } from 'react-device-detect';
import { PageType } from '../model/PageType';

export interface NoThanksProps {
    language: Language | undefined;
    isOpenProfile: boolean;
    pageType: PageType;
}

export const NoThanksCard = (props: NoThanksProps) => {

    const [textKey, setTextkey] = useState<string>();

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        if (props.pageType === PageType.WALL) {
            setTextkey(FOLLOW_TO_SEE_THANKS);
        } else {
            setTextkey(props.isOpenProfile ? BE_THE_FIRST_THANKER : THIS_IS_PRIVATE_PROFILE);
        }   
    }, [props.isOpenProfile]);

    const resolveHeaderClasses = (): string => {
        return `no-thanks ${isMobile ? "mobile-specs" : "desktop-specs"}`;
    }

    const resolveTextClasses = (): string => {
        return `text-empty-thanks ${isMobile ? "text-mobile" : "text-desktop"}`;
;    }

    return (
        <div className={resolveHeaderClasses()}>
            <div className="emoji">{props.isOpenProfile ? '😎' : '💂'}</div>
            <div className={resolveTextClasses()}>{translationService.getFor(textKey!)}</div>
        </div>
    )

}