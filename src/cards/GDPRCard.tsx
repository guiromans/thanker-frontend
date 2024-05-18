import { GDPR, Language, TranslationService } from "../services/TranslationService";
import '../style/Styles.css';
import '../style/GDPR.css';

export interface GDPRProps {
    language: Language | undefined;
}

export const GDPRCard = (props: GDPRProps) => {

    const translationService: TranslationService = new TranslationService();

    return (
        <div className="top-padding gdpr-style" dangerouslySetInnerHTML={{ __html: translationService.getFor(GDPR)! }} />
    )

}