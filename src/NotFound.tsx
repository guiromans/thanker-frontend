import { useEffect, useState } from 'react';
import './style/NotFound.css';
import { GO_FIND_GRATITUDE, Language, PAGE_NOT_FOUND, TranslationService } from './services/TranslationService';
import { StorageService } from './services/StorageService';

export const NotFound = () => {

    const [language, setlanguage] = useState<Language>();

    const storageService: StorageService = new StorageService();
    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        setlanguage(storageService.getLanguage()!);
    }, []);

    return (
        <div className="not-found">
            <div className='text-not-found'>{translationService.getFor(PAGE_NOT_FOUND)} 😬</div>
            <div className='text-not-found'>{translationService.getFor(GO_FIND_GRATITUDE)}! 🙏</div>
        </div>
    );

}