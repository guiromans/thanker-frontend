import { UUID } from "crypto";
import { Language } from "../services/TranslationService";

export interface UserResponse {
    id: UUID,
    name: string,
    handle: string,
    profilePictureUrl: string | null,
    numberOfThanks: number,
    isOpenProfile: boolean
};

export interface CreateUserRequest {
    email: string,
    name: string,
    handle: string,
    password: string
}

export interface CreateUserResponse {
    id: string,
    email: string,
    name: string,
    userName: string,
    password: string,
    numberOfThanks: number,
    profilePictureUrl: string | null
}

export interface ResetPasswordRequest {
    newPassword: string
}

export interface UsernameChangeRequest {
    name: string
}

export interface ImageUploadRequest {
    fileName: string
}

export interface ImageUploadResponse {
    uploadUrl: string,
    getUrl: string
}