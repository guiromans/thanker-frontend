import { useEffect, useState } from 'react';
import { BE_THE_FIRST_THANKER, Language, THIS_IS_PRIVATE_PROFILE, TranslationService } from '../services/TranslationService';
import '../style/NoThanks.css';

export interface NoThanksProps {
    language: Language | undefined;
    isOpenProfile: boolean;
}

export const NoThanksCard = (props: NoThanksProps) => {

    const [textKey, setTextkey] = useState<string>();

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        setTextkey(props.isOpenProfile ? BE_THE_FIRST_THANKER : THIS_IS_PRIVATE_PROFILE);
    }, [props.isOpenProfile]);

    return (
        <div className="no-thanks">
            <div className="emoji">{props.isOpenProfile ? '😎' : '💂'}</div>
            <div className="text-empty-thanks">{translationService.getFor(textKey!)}</div>
        </div>
    )

}