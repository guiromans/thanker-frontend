import React from 'react';
import { QuotesService } from '../services/translations/QuotesService';
import { Quote } from '../model/Quote';
import { Language, PLATO, TranslationService, UNKNOWN } from '../services/TranslationService';
import '../style/QuoteCard.css';
import SponsoredCard from './SponsoredCard';
import { AuthService } from '../services/AuthService';
import { isMobile } from 'react-device-detect';

export interface QuoteProps {
    language: Language | undefined;
    pageUserId: string | undefined | null;
}

const QuoteCard = (props: QuoteProps) => {

    const quotesService: QuotesService = new QuotesService();
    const translationService: TranslationService = new TranslationService();
    const authService: AuthService = new AuthService();
    const quote: Quote | undefined = quotesService.getQuote();

    const isUserPage = (): boolean => {
        const thisUserId = authService.readUserIdFromToken();
        return props.pageUserId !== undefined && thisUserId !== undefined && props.pageUserId === thisUserId;
    }

    const resolveAuthor = (authorName: string | undefined): string | undefined => {
        if (!authorName) {
            return translationService.getFor(UNKNOWN);
        } else if (authorName === "Plato") {
           return translationService.getFor(PLATO);
        } else return authorName;
    }

    const getProfessions = (quote: Quote): string[] => {
        if (!quote.professionKeys || quote.professionKeys.length === 0) {
            return [];
        }

        const professions: (string | undefined)[] = quote.professionKeys.map(key => translationService.getFor(key));
        
        return professions.filter((profession): profession is string => profession !== undefined);
    }

    const resolveTextClasses = (): string => {
        return isMobile ? "quote-text-mobile" : "quote-text";
    }

    const resolveContainerClasses = (): string => {
        return `quote-container ${isMobile ? "container-mobile": "container-desktop"}`; 
    }

    return(
        <div className='quote-section-container'>
            <div className={resolveContainerClasses()}>
                <div className={resolveTextClasses()}><i>{quote && translationService.getFor(quote.quoteKey)}</i></div>
                <br/>
                <div>{quote && `- ${resolveAuthor(quote.authorName)}`}</div>
                {
                    quote?.professionKeys && quote.professionKeys && quote.professionKeys.length > 0 &&
                    <div className='professions'>
                        {`(${getProfessions(quote).join(", ")})`}
                    </div>
                }
            </div>
            {   !isUserPage() && !isMobile &&
                <div className='no-overflow'>
                    <SponsoredCard language={props.language}/>
                </div>
            }
        </div>
    );

}

export default React.memo(QuoteCard);