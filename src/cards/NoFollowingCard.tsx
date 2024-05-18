import { Language, START_FOLLOWING, TranslationService } from "../services/TranslationService";
import '../style/NoFollowing.css';

export interface NoFollowingProps {
    language: Language | undefined;
}

export const NoFollowingCard = (props: NoFollowingProps) => {

    const translationService: TranslationService = new TranslationService();

    return (
        <div className="no-following">
            <div className="emoji">🤩</div>
            <div className="text-empty">{translationService.getFor(START_FOLLOWING)}</div>
        </div>
    )

}