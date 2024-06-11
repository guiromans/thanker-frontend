import { PrivacyType, ThanksResponse } from "../model/ThanksModel";
import { toDateAndTimeString } from "../utils/DateUtils";
import '../style/ThanksCard.css';
import { Language, SEE_MORE, TranslationService } from "../services/TranslationService";
import { AuthService } from "../services/AuthService";
import React, { ChangeEvent, useEffect, useState } from "react";
import { resolveImage } from "../utils/UserUtils";
import { privacyTypeOf } from "../utils/ThanksUtils";
import deleteIcon from "../assets/images/delete_icon.png";

export type ThanksCardProps = {
    thanks: ThanksResponse;
    onPrivacyTypeChange(thanksId: string, privacyType: PrivacyType): void;
    onUserImageClick(userId: string): void;
    language: Language | undefined;
    onClickedDelete(thanksId: string): void;
    userImageUrl: string | null;
    pageUserId: string | null | undefined;
    timestamp: number;
}

const ThanksCard: React.FC<ThanksCardProps> = (props: ThanksCardProps) => {

    const MAX_INITIAL_TEXT_SIZE = 150;

    const translationService: TranslationService = new TranslationService();
    const authService: AuthService = new AuthService();
    // User ID of page we are visiting
    const pageUserId: string | undefined | null = props.pageUserId;
    // Our own User ID
    const thisUserId: string = authService.readUserIdFromToken()!;
    const [cardStyle, setCardStyle] = useState<string>('');
    const [privacyType, setPrivacyType] = useState<PrivacyType>(props.thanks.privacyType);
    const [profilePicUrl, setProfilePicUrl] = useState<string>(resolveImage(props.thanks.giver.profilePictureUrl));
    const [text, setText] = useState<string>();
    const [isTruncated, setIsTruncated] = useState<boolean>();
    
    useEffect(() => {
        const textThanks: string = props.thanks.text;
        let initialText: string;

        if (textThanks.length > MAX_INITIAL_TEXT_SIZE) {
            initialText = textThanks.substring(0, MAX_INITIAL_TEXT_SIZE);
        } else {
            initialText = textThanks;
        }

        setIsTruncated(textThanks.length > MAX_INITIAL_TEXT_SIZE);
        setText(initialText);
    }, []);

    useEffect(() => {
        setCardStyle(resolveCardStyle());
    }, [props.thanks.privacyType])

    useEffect(() => {
        if (isUserPage() && props.timestamp !== 0) {
            const newImageUrl: string = `${props.userImageUrl}?v=${props.timestamp}`;
            setProfilePicUrl(newImageUrl);
        }
    }, [props.timestamp]);

    const resolveIntro = (): string => {
        const thanks: ThanksResponse = props.thanks;
        let message: string = "";

        if (thisUserId === thanks.giver.id && thanks.giver.id === thanks.receiver.id) {
            // Thanks in own page
            message = `${translationService.getIntro()}`;
        } else if (thanks.receiver.id === thanks.giver.id) {
            // The other person's thanks on her/his own page
            message = `${thanks.giver.name} ${translationService.getOthersIntro()}`
        } else {
            // Another person thanking in another one's page
            message = `${thanks.giver.name} ${translationService.getOthersIntro()} ${thanks.receiver.name}`
        }

        return message;
    }

    const handlePrivacyTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const updatedPrivacyType: PrivacyType = privacyTypeOf(event.target.value);
        setPrivacyType(updatedPrivacyType);

        props.onPrivacyTypeChange(props.thanks.id, updatedPrivacyType);
    }

    const handleUserImageClick = () => {
        if (!isUserPage()) {
            props.onUserImageClick(props.thanks.giver.id);
        }
    }

    const isUserPage = (): boolean => {
        return pageUserId !== undefined && pageUserId !== null && 
            authService.readUserIdFromToken() === props.thanks.giver.id && pageUserId === props.thanks.giver.id
    }

    const resolveImageStyle = (): string => {
        let style = "circle-thanks thanks-card-size";

        if (!isUserPage()) {
            style += " clickable"
        }

        return style;
    }

    const canChangePrivacy = (): boolean => {
        const thanks: ThanksResponse = props.thanks;

        return thisUserId === thanks.giver.id || thisUserId === thanks.receiver.id;
    }

    const resolveCardColour = (): string => {
        return props.thanks.privacyType === PrivacyType.PRIVATE ? "private-thanks-color" : "public-thanks-color";
    }

    const resolveCardStyle = (): string => {
        return `card-thanks ${resolveCardColour()}`;
    }

    const isUserRelated = (): boolean => {
        return thisUserId === props.thanks.giver.id || thisUserId === props.thanks.receiver.id;
    }

    const handleClickedDelete = () => {
        props.onClickedDelete(props.thanks.id);
    }

    const resolvePrivacyOptions = (): PrivacyType[] => {
        if (authService.readUserIdFromToken() !== props.thanks.giver.id) {
            return [PrivacyType.PRIVATE];
        }

        return Object.values(PrivacyType).filter(type => typeof type === 'string');
    }

    const handleSeeMoreClick = () => {
        setText(props.thanks.text);
        setIsTruncated(false);
    }

    return (
        <div className={cardStyle}>
            <div className="giver-thanks-card">
                <div className={resolveImageStyle()}>
                    <img src={profilePicUrl} onClick={handleUserImageClick} />
                </div>
            </div>
            <div className="content-thanks-card">
                <div className="card-element">
                    {resolveIntro()}:
                </div>
                <div className="card-element text">
                    <b>{text}</b> {isTruncated && "..." && 
                    (<label className="text-label" onClick={handleSeeMoreClick}>{translationService.getFor(SEE_MORE)}</label>)}
                </div>
                <div className="card-element date">
                    {toDateAndTimeString(props.thanks.date)}
                </div>
            </div>
            {canChangePrivacy() && <div className="privacy-box">
                <select value={privacyType} name='privacyType' onChange={handlePrivacyTypeChange}>
                    {resolvePrivacyOptions().map(type => (
                        <option key={type} value={type}>{translationService.getFor(type)}</option>
                    ))}
                </select>
            </div>
            }
            { isUserRelated() && <div className="delete-container">
                <img src={deleteIcon} className="delete-icon" onClick={handleClickedDelete}/>
            </div>
            }
        </div>
    );

}

export default React.memo(ThanksCard);