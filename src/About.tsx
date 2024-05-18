import './style/Styles.css';
import './style/About.css';
import { useEffect, useState } from 'react';
import { Loader } from './cards/Loader';
import { BERKELEY_ARTICLE, CRYPTOGRAPHY_INFO, HARVARD_ARTICLE, INQUIRIES_AND_EMAIL, Language, SHOW_GRATITUDE_TEXT, THANKING_MAKES_YOU_HAPPIER, TranslationService } from './services/TranslationService';

export interface AboutProps {
    language: Language| undefined;
}

export const About = (props: AboutProps) => {

    const [loading, setLoading] = useState<boolean>(true);

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        setLoading(false);
    }, [])

    if (loading) {
        <div>
            <Loader size="massive" />
        </div>
    }

    return (
        <div className="top-padding about-container">
            <div className='about-section'>
                <h1>{translationService.getFor(THANKING_MAKES_YOU_HAPPIER)}</h1>
            </div>
            <div className='about-section'>
                <h3>{translationService.getFor(SHOW_GRATITUDE_TEXT)}</h3>
            </div>
            <div className='about-section'>
                {translationService.getFor(CRYPTOGRAPHY_INFO)}
            </div>
            <div className='email about-section'>
                {translationService.getFor(INQUIRIES_AND_EMAIL)}:
                <a href="mailto:beatrue@thanker.co">beatrue@thanker.co</a>
            </div>
            <div className='about-section'>
                <a href='https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier' target="_blank">{translationService.getFor(HARVARD_ARTICLE)}</a>
                <a href='https://greatergood.berkeley.edu/article/item/how_gratitude_changes_you_and_your_brain' target="_blank">{translationService.getFor(BERKELEY_ARTICLE)}</a>
            </div>
        </div>
    );

}