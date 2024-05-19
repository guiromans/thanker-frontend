import { UserResponse } from "../model/UserModel";
import defaultProfilePic from '../assets/images/profile_colorized_white_bg.png';


export const getUniqueById = (list: UserResponse[]): UserResponse[] => {
    const ids: Set<String> = new Set();
    const result: UserResponse[] = [];

    list.forEach(user => {
        if (!ids.has(user.id)) {
            ids.add(user.id);
            result.push(user);
        }
    });

    return result;
}

export const resolveUserImage = (user: UserResponse | undefined): string => {
    return (user && user.profilePictureUrl !== null ?
        user.profilePictureUrl
        : defaultProfilePic)
        + `?v=${new Date().getTime()}`;
}

export const resolveImage = (imageUrl: string | undefined | null): string => {
    return (imageUrl && imageUrl !== null ? imageUrl 
        : defaultProfilePic)
        + `?v=${new Date().getTime()}`; 
}