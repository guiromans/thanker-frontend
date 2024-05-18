import { UserResponse } from "./UserModel";

export interface CreateThanksRequest {
    receiverId: string,
    text: string,
    privacyType: PrivacyType
}

export interface ThanksResponse {
    id: string,
    userId: string,
    giver: UserResponse,
    receiver: UserResponse,
    text: String,
    privacyType: PrivacyType,
    date: Date
}

export enum PrivacyType {
    PRIVATE = "PRIVATE", PUBLIC = "PUBLIC"
};

export interface PrivacyChangeResponse {
    thanksId: string,
    hasChanged: boolean
}

export interface DeleteThanksResponse {
    thanksId: string,
    deleted: boolean
}