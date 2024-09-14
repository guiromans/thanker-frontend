import ReactFlagsSelect from "react-flags-select";
import { Language } from "../services/TranslationService";
import { languageOf } from "../utils/LanguageUtils";
import { useState } from "react";
import { StorageService } from "../services/StorageService";

export interface FlagProps {
    onLanguageChange: (language: Language) => void;
}

export const LanguageFlags = (props: FlagProps) => {

    const storageService: StorageService = new StorageService();

    const [language, setLanguage] = useState<Language>(storageService.getLanguage());

    const handleLanguageChange = (code: string) => {
        const lang: Language = languageOf(code);
        setLanguage(lang);
        storageService.setLanguage(lang);
        props.onLanguageChange(lang);
    }

    return (
        <div>
            <ReactFlagsSelect
                fullWidth={false}
                countries={Object.values(Language)}
                customLabels={
                    {"PT": "PT", "GB": "EN", "ES": "ES", "JP": "JP"}
                }
                selected={language}
                onSelect={handleLanguageChange}
            />
        </div>
    );

}