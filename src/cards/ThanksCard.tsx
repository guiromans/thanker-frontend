import { PrivacyType, ThanksResponse } from "../model/ThanksModel";
import { toDateAndTimeString } from "../utils/DateUtils";
import '../style/ThanksCard.css';
import { Language, TranslationService } from "../services/TranslationService";
import { AuthService } from "../services/AuthService";
import React, { ChangeEvent, useEffect, useState } from "react";
import { resolveAndReloadImage, resolveImage } from "../utils/UserUtils";
import { privacyTypeOf } from "../utils/ThanksUtils";
import deleteIcon from "../assets/images/delete_icon.png";

export type ThanksCardProps = {
    thanks: ThanksResponse;
    onPrivacyTypeChange(thanksId: string, privacyType: PrivacyType): void;
    onUserImageClick(userId: string): void;
    language: Language | undefined;
    onClickedDelete(thanksId: string): void;
    imageCount: number;
    userImageUrl: string | null;
    pageUserId: string | null | undefined;
}

const ThanksCard: React.FC<ThanksCardProps> = (props: ThanksCardProps) => {

    const translationService: TranslationService = new TranslationService();
    const authService: AuthService = new AuthService();
    const pageUserId: string | undefined | null = props.pageUserId;
    const [cardStyle, setCardStyle] = useState<string>('');
    const [privacyType, setPrivacyType] = useState<PrivacyType>(props.thanks.privacyType);
    const [profilePicUrl, setProfilePicUrl] = useState<string | undefined | null>(resolveImage(props.thanks.giver.profilePictureUrl));
    const [imageCount, setImageCount] = useState<number>(props.imageCount);

    useEffect(() => {
        setCardStyle(resolveCardStyle());
    }, [props.thanks.privacyType])

    useEffect(() => {
        if (isUserPage() && imageCount !== 0 && imageCount !== props.imageCount) {
            const newImageUrl: string = resolveAndReloadImage(props.userImageUrl);
            setProfilePicUrl(newImageUrl);
            setImageCount(props.imageCount);
        }
    }, [props.imageCount]);

    const resolveIntro = (): string => {
        const thanks: ThanksResponse = props.thanks;
        let message: string = "";

        if (pageUserId && pageUserId === thanks.giver.id && thanks.giver.id === thanks.receiver.id) {
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

        return pageUserId === thanks.giver.id || pageUserId === thanks.receiver.id;
    }

    const resolveCardColour = (): string => {
        return props.thanks.privacyType === PrivacyType.PRIVATE ? "private-thanks-color" : "public-thanks-color";
    }

    const resolveCardStyle = (): string => {
        return `card-thanks ${resolveCardColour()}`;
    }

    const isUserRelated = (): boolean => {
        return pageUserId === props.thanks.giver.id || pageUserId === props.thanks.receiver.id;
    }

    const handleClickedDelete = () => {
        props.onClickedDelete(props.thanks.id);
    }

    const resolvePrivacyOptions = (): PrivacyType[] => {
        if (pageUserId !== props.thanks.giver.id) {
            return [PrivacyType.PRIVATE];
        }

        return Object.values(PrivacyType).filter(type => typeof type === 'string');
    }

    return (
        <div className={cardStyle}>
            <div className="giver-thanks-card">
                <div className={resolveImageStyle()}>
                    <img src={`${profilePicUrl}`} onClick={handleUserImageClick} />
                </div>
            </div>
            <div className="content-thanks-card">
                <div className="card-element">
                    {resolveIntro()}:
                </div>
                <div className="card-element text">
                    <b>{props.thanks.text}</b>
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