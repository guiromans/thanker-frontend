import { THANKER_INTRO, TranslationService } from "../services/TranslationService"

export const ThankerIntro = () => {

    const translationService: TranslationService = new TranslationService();

    return (
        <div>
            <p><b>{translationService.getFor(THANKER_INTRO)}</b></p>
        </div>
    )

}