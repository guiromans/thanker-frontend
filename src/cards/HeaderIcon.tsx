import React from "react";
import { Language, TranslationService } from "../services/TranslationService";
import '../style/Icon.css';
import '../style/Header.css';

export interface IconProps {
    imageSrc: string;
    textKey: string;
    language: Language | undefined;
    onClick: () => void;
    isBold: boolean;
}

const HeaderIcon = (props: IconProps) => {

    const translationService: TranslationService = new TranslationService();

    const handleIconClick = () => {
        props.onClick();
    }

    const resolveIconClasses = (): string => {
        return `icon-container ${props.isBold ? "bold-header" : ""}`;
    }

    return (
        <div className={resolveIconClasses()} onClick={handleIconClick}>
            <img src={props.imageSrc} />
            <label>{translationService.getFor(props.textKey)}</label>
        </div>
    )

}

export default React.memo(HeaderIcon);