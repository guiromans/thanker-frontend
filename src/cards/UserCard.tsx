import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ImageUploadResponse, UserResponse } from "../model/UserModel";
import { CLICK_YOUR_NAME_UPDATE, Language, THANKS, UPDATE, TranslationService, USERNAME_UPDATED, PUBLIC, PRIVATE, FILES_MUST_BE, CLICK_YOUR_PICTURE_UPDATE } from "../services/TranslationService";
import '../style/UserStyle.css';
import { resolveUserImage } from "../utils/UserUtils";
import { enqueueSnackbar } from "notistack";
import { UserService } from "../services/UserService";
import { AuthService } from "../services/AuthService";
import { ImageService } from "../services/ImageService";
import { Loader } from "./Loader";
import { AxiosError } from "axios";
import { Tooltip } from "react-tooltip";

export interface UserProps {
    user: UserResponse | undefined;
    language: Language | undefined;
    onImageUpdated: (imageUrl: string) => void;
}

const UserCard = (props: UserProps) => {

    const [username, setUsername] = useState<string | undefined>(props.user?.name);
    const [isEditingName, setIsEditingName] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>(resolveUserImage(props.user));
    const [loadingImage, setLoadingImage] = useState<boolean>(false);
    const [cacheBuster, setCacheBuster] = useState('');
    const inputNameRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const translationService: TranslationService = new TranslationService();
    const userService: UserService = new UserService();
    const authService: AuthService = new AuthService();
    const imageService: ImageService = new ImageService();

    useEffect(() => {
        if (isEditingName && inputNameRef !== null && inputNameRef.current !== null) {
            inputNameRef.current.focus();
        }
        resetCacheBuster(imageUrl);
    }, [isEditingName])

    const displayUserThanks = (): string => {
        const thanksStr: string | undefined = props.user ? translationService.getFor(THANKS) : "";
        return `${props.user?.numberOfThanks.toLocaleString("en-GB")} ${thanksStr}`;
    }

    const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleSubmitChangedUsername = (event: React.FormEvent) => {
        event.preventDefault();

        if (username) {
            userService.updateUsername(username)
                .then(() => {
                    enqueueSnackbar(translationService.getFor(USERNAME_UPDATED), { variant: 'success' });
                    setUsername(username);
                })
                .catch(() => {
                    enqueueSnackbar("Error updating username", { variant: 'error' });
                    setUsername(props.user?.name);
                })
                .finally(() => setIsEditingName(false));
        }
    }

    const handleNameClick = () => {
        if (isUserPage()) {
            setIsEditingName(true);
        }
    }

    const isUserPage = (): boolean => {
        const thisUserId = authService.readUserIdFromToken();
        const pageUserId = props.user?.id;

        return thisUserId !== undefined && pageUserId !== undefined && thisUserId === pageUserId;
    }

    const handleBlurChangeName = () => {
        setTimeout(() => {
            setIsEditingName(false);
        }, 100);
    }

    const handleImageClick = () => {
        if (isUserPage()) {
            if (fileInputRef !== null && fileInputRef.current !== null) {
                fileInputRef.current.click();
            }
        }
    }

    const handleImageSelection = async(event: ChangeEvent<HTMLInputElement>) => {
        setLoadingImage(true);
        event.target.files && await userService.getImageUploadUrl(event.target.files[0].name)
            .then(resp => {
                const imageUrlsResponse: ImageUploadResponse = resp.data as ImageUploadResponse;
                console.log("Got upload URL. Going to compress and send...");
                imageService.compressAndSend(event, imageUrlsResponse.uploadUrl)
                    .then(() => {
                        console.log("Sent image to S3...");
                        const imageUrl: string = imageUrlsResponse.getUrl;
                        resetCacheBuster(imageUrl);
                        setImageUrl(imageUrl);
                        console.log("Get image:", imageUrl);
                    })
                    
            })
            .catch((err) => {
                const errorResponse: AxiosError = err as AxiosError;
                if (errorResponse.response?.status === 403) {
                    enqueueSnackbar(`${translationService.getFor(FILES_MUST_BE)}: JPG, GIF or PNG`, { variant: "error" });
                }
            })
            .finally(() => setLoadingImage(false));
            
    }

    const resetCacheBuster = (imageUrl: string) => {
        setCacheBuster(`?${new Date().getTime()}`);
        props.onImageUpdated(imageUrl);
    }

    const resolveImageClassName = (): string => {
        return ("user-image " + isUserPage() ? "custom-link" : "").trim();
    }

    const resolveHandle = (): string => {
        return props && props.user ? `@${props.user.handle}` : "";
    }

    return (
        <div className="user-container">
            {!isEditingName && <div className="user-data user-name" data-tooltip-id="tooltip-name" onClick={handleNameClick}>
                <b>{username}</b>
            </div>
            }
            {
                isEditingName &&
                <form>
                    <input type="text" value={username} onChange={handleChangeUsername} onBlur={handleBlurChangeName} ref={inputNameRef} className="handle-edit" />
                    <button className="submit-button" onClick={handleSubmitChangedUsername}>{translationService.getFor(UPDATE)}</button>
                </form>
            }
            <div className="handle">{resolveHandle()}</div>
            {!loadingImage && <div className="circle user-image" data-tooltip-id="tooltip-image" data-tooltip-content={translationService.getFor(CLICK_YOUR_PICTURE_UPDATE)}>
                <img src={`${imageUrl}${cacheBuster}`} alt="Click to upload new image"
                    className={resolveImageClassName()}
                    onClick={handleImageClick}
                />
                <input className="user-image" type="file" accept="image/jpeg, image/png, image/gif" ref={fileInputRef} onChange={handleImageSelection}/>
                <br/>
            </div>}
            <div>
                <Tooltip id="tooltip-name" anchorSelect=".user-name" place="top" className="tooltip">
                        {translationService.getFor(CLICK_YOUR_NAME_UPDATE)}
                </Tooltip>
                <Tooltip id="tooltip-image" anchorSelect=".user-image" place="top" className="tooltip">
                        {translationService.getFor(CLICK_YOUR_PICTURE_UPDATE)}
                </Tooltip>
            </div>
            {loadingImage && <div className="circle">
                <Loader size="small"/>
            </div>}
            <div className="user-data">
                {props.user && props.user !== null && displayUserThanks()}
            </div>
            <div className="text-profile">{translationService.getFor(props.user?.isOpenProfile ? PUBLIC : PRIVATE)}</div>
        </div>
        
    );

}

export default React.memo(UserCard);