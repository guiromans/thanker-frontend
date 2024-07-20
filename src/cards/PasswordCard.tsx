import { ChangeEvent, useEffect, useState } from 'react';
import '../style/Password.css';
import '../style/Styles.css';
import eyeOn from '../assets/images/eye_on.png';
import eyeOff from '../assets/images/eye_off.png';
import { TranslationService } from '../services/TranslationService';

export interface PasswordProps {
    onPasswordUpdate(password: string): void;
    disabled: boolean;
    className: string;
    placeholder: string | undefined;
}

export const PasswordCard = (props: PasswordProps) => {

    const [hide, setHide] = useState<boolean>(true);
    const [inputType, setInputType] = useState<"text" | "password">("text");
    const [password, setPassword] = useState<string>("");

    const translationService: TranslationService = new TranslationService();

    useEffect(() => {
        setInputType(hide ? "password" : "text");
    }, [hide]);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedPassword: string = event.target.value;

        setPassword(updatedPassword);
        props.onPasswordUpdate(updatedPassword);
    }

    const handleEyeClick = () => {
        setHide(!hide);
    }

    return (
        <div className="password-container">
            <input
                type={inputType} 
                value={password} 
                onChange={handlePasswordChange} 
                placeholder={props.placeholder}
                className={props.className}
                disabled={props.disabled}
            />
            <div className='eye-div'>
                {hide && <img src={eyeOn} onClick={handleEyeClick} className='eye'/>}
                {!hide && <img src={eyeOff} onClick={handleEyeClick} className='eye'/>}
            </div>
        </div>
    )

};