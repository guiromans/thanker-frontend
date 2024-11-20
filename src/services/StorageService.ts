import { AuthResponse } from "../model/AuthResponse";
import { PrivacyType } from "../model/ThanksModel";
import { languageOf } from "../utils/LanguageUtils";
import { privacyTypeOf } from "../utils/ThanksUtils";
import { Language } from "./TranslationService";

export class StorageService {

    TOKEN: string = "token";
    REFRESH_TOKEN: string = "refreshToken";
    LANGUAGE: string = "language";
    DEFAULT_THANKS_PRIVACY: string = "default_thanks_privacy";
    HIDE_ADS: string = "hide_ads";

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN);
    }

    getRefreshToken(): string | null {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }

    saveTokensFrom(authResponse: AuthResponse) {
        localStorage.setItem(this.TOKEN, authResponse.token);
        localStorage.setItem(this.REFRESH_TOKEN, authResponse.refreshToken);
    }

    removeTokens() {
        localStorage.removeItem(this.TOKEN);
        localStorage.removeItem(this.REFRESH_TOKEN);
    }

    getLanguage(): Language {
        const storedLanguageKey: string | null = localStorage.getItem(this.LANGUAGE);

        if (storedLanguageKey === null) {
            return Language.GB;
        }

        const language = languageOf(storedLanguageKey);

        return language !== null ? language : Language.GB;
    }

    setLanguage(language: Language) {
        localStorage.setItem(this.LANGUAGE, language);
    }

    getDefaultThanksPrivacy(): PrivacyType {
        const savedPrivacyType: string | null = localStorage.getItem(this.DEFAULT_THANKS_PRIVACY);

        return savedPrivacyType != null ? privacyTypeOf(savedPrivacyType) : PrivacyType.PRIVATE;
    }

    getHideAds(): boolean {
        const hideAdsStr: string | null = localStorage.getItem(this.HIDE_ADS);

        if (hideAdsStr == null) {
            return false;
        }

        return hideAdsStr.toLocaleLowerCase().trim() === "true" ? true : false;
    }

    setDefaultThanksPrivacy(privacyType: PrivacyType) {
        localStorage.setItem(this.DEFAULT_THANKS_PRIVACY, privacyType);
    }

    setHideAds(hide: boolean) {
        localStorage.setItem(this.HIDE_ADS, hide.toString());
    }

}