import { Language } from "../services/TranslationService";

export const languageOf = (enumStr: string): Language => {
    const str: string = enumStr.trim();
    let lang: Language = Language.GB;

    switch (str) {
        case Language.GB.toString(): lang = Language.GB; break;
        case Language.PT.toString(): lang = Language.PT; break;
    }

    console.log("Returning:", lang);

    return lang;
}