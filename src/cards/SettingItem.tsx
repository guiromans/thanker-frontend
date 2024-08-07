import { useEffect, useState } from "react";
import '../style/Settings.css';
import { Language, TranslationService } from "../services/TranslationService";
import { isMobile } from "react-device-detect";

export interface SettingItemProps {
    isChecked: boolean | undefined;
    keyChecked: string;
    keyUnchecked: string;
    language: Language | undefined;
    onSwitched: (toogleValue: boolean) => void;
}

export const SettingItem = (props: SettingItemProps) => {

    const [checked, setChecked] = useState<boolean>(props.isChecked || false);
    const [textKey, setTextKey] = useState<string>();

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        setChecked(props.isChecked || false);
    }, [props.isChecked]);

    useEffect(() => {
        setTextKey(checked ? props.keyChecked : props.keyUnchecked);
    }, [checked]);

    const handleSwitched = () => {
        const updatedChecked: boolean = !checked;
        setChecked(updatedChecked);
        props.onSwitched(updatedChecked);
    }

    const resolveCheckboxClasses = (): string => {
        return `${isMobile ? "switch-mobile" : "switch-desktop"}`;
    }

    return (
        <div className="setting-item">
            <label className={resolveCheckboxClasses()}>
                <input 
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={handleSwitched}
                />
                <span className="slider round" />
            </label>
            <div className="settings-text">{translationService.getFor(textKey!)}</div>
        </div>
    )
}