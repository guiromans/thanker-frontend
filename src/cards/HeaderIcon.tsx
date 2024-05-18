import React from "react";
import { Language, TranslationService } from "../services/TranslationService";
import '../style/Icon.css';

export interface IconProps {
    imageSrc: string;
    textKey: string;
    language: Language | undefined;
    onClick: () => void;
}

const HeaderIcon = (props: IconProps) => {

    const translationService: TranslationService = new TranslationService();

    const handleIconClick = () => {
        props.onClick();
    }

    return (
        <div className="icon-container" onClick={handleIconClick}>
            <img src={props.imageSrc} />
            <label>{translationService.getFor(props.textKey)}</label>
        </div>
    )

}

export default React.memo(HeaderIcon);