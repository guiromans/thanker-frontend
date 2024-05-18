import React from 'react';
import '../style/Sponsor.css';
import Ad from './Ad';
import { Language, THANKER_IS_THANKFUL_TO, TranslationService } from '../services/TranslationService';

export interface SponsorProps {
    language: Language | undefined;
}

const SponsoredCard = (props: SponsorProps) => {

    const translationService: TranslationService = new TranslationService();

    return (
        <div className="sponsor">
            <b>{translationService.getFor(THANKER_IS_THANKFUL_TO)}</b><br/>
            <div>
                <Ad />
            </div>
        </div>
    );

}

export default React.memo(SponsoredCard);