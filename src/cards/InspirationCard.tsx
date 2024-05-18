import React, { useEffect } from "react";
import { Language, TranslationService } from "../services/TranslationService"

export interface InspirationCardProps {
    language: Language | undefined;
}

const InspirationCard = (props: InspirationCardProps) => {

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        const language: Language | undefined = props.language;

        if (language) {
            translationService.setLanguage(language);
        } 
    }, [props.language])

    return (
        <div>
            {translationService.getInspiration()}
        </div>
    );

}

export default React.memo(InspirationCard);