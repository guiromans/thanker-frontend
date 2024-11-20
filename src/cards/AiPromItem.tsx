import { Language, TranslationService } from "../services/TranslationService";
import '../style/AiProItem.css';

export interface ItemProps {
    language: Language | undefined;
    textKey: string;
    icon: string;
}

export const AiProItem: React.FC<ItemProps> = (props: ItemProps) => {

    const translationService: TranslationService = new TranslationService();

    return (
        <div className="pro-item-container">
            <div className="pro-icon-container">
                <img className="pro-icon-img" src={props.icon} />
            </div>
            <div className="pro-text-container">
                {translationService.getFor(props.textKey)}
            </div>
        </div>
    )

}