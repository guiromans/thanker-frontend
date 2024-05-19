import { THANKER_INTRO, TranslationService } from "../services/TranslationService"
import '../style/Intro.css';

export const ThankerIntro = () => {

    const translationService: TranslationService = new TranslationService();

    return (
        <div className="intro">
            <p><b>{translationService.getFor(THANKER_INTRO)}</b></p>
        </div>
    )

}