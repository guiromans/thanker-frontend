import { AxiosResponse } from "axios";
import { CreateUserRequest, ImageUploadRequest, ResetPasswordRequest, UsernameChangeRequest as UsernameUpdateRequest } from "../model/UserModel";
import { AuthService } from "./AuthService";
import { http } from "./Interceptor";
import { Language } from "./TranslationService";
import { StorageService } from "./StorageService";

export class UserService {

    USERS_URL = '/users';
    SEARCH_USERS_URL = `${this.USERS_URL}/search`;

    authService: AuthService = new AuthService();

    async createUser(request: CreateUserRequest, language: Language): Promise<AxiosResponse> {
        const reqParams = { language: language };
        return await http.post(this.USERS_URL, request, { params: reqParams });
    }

    async getUser(userId: string): Promise<AxiosResponse> {
        return await http.get(`${this.USERS_URL}/${userId}`);
    }

    async requestPasswordReset(email: string, language: Language): Promise<AxiosResponse> {
        const resetPassRequestParams = { email: email, language: language };
        return await http.get(`${this.USERS_URL}/reset-password/request`, { params: resetPassRequestParams });
    }

    async requestNewConfirmation(email: string, language: Language): Promise<AxiosResponse> {
        const resetNewConfirmationRequestParams = { email: email, language: language };
        return await http.get(`${this.USERS_URL}/confirmation/new`, { params: resetNewConfirmationRequestParams });
    }

    async setNewPassword(userId: string, resetPasswordId: string, newPassword: string): Promise<AxiosResponse> {
        const newPassRequest: ResetPasswordRequest = { newPassword: newPassword };

        return await http.patch(`${this.USERS_URL}/${userId}/reset-password/${resetPasswordId}`, newPassRequest);
    }

    async searchUsers(query: string, page: number): Promise<AxiosResponse> {
        const params = { query: query, page: page };

        return await http.get(`${this.SEARCH_USERS_URL}`, { params: params })
    }

    async followUser(userId: string): Promise<AxiosResponse> {
        return await http.patch(`${this.USERS_URL}/${userId}/follow`);
    }

    async unfollowUser(userId: string): Promise<AxiosResponse> {
        const userParams = { userId: userId };
        return await http.delete(`${this.USERS_URL}/${userId}/follow`, { params: userParams });
    }

    async isUserFollowingById(followingUserId: string): Promise<AxiosResponse> {
        const followingParams = { userId: followingUserId };
        return await http.get(
            `${this.USERS_URL}/is-following`, { params: followingParams }
        );
    }

    async searchFollowingUsersByName(query: string, page: number): Promise<AxiosResponse> {
        const queryDto = { "query": query };
        return await http.post(
            `${this.USERS_URL}/following/search-by-name?page=${page}`, queryDto
        );
    }

    async searchPagedFollowingUsers(page: number): Promise<AxiosResponse> {
        return await http.post(
            `${this.USERS_URL}/following/search-by-page?page=${page}`
        );
    }

    async updateUsername(updatedName: string): Promise<AxiosResponse> {
        const updateNameRequest: UsernameUpdateRequest = { name: updatedName }
        return await http.patch(`${this.USERS_URL}/update-name`, updateNameRequest)
    }

    async getImageUploadUrl(fileName: string): Promise<AxiosResponse> {
        const imageUploadRequest: ImageUploadRequest = { fileName: fileName }
        return await http.patch(`${this.USERS_URL}/get-image-upload-url`, imageUploadRequest);
    }

    async updateIsOpenProfile(isOpenProfile: boolean): Promise<AxiosResponse> {
        return await http.patch(`${this.USERS_URL}/update-open-profile?isOpenProfile=${isOpenProfile}`)
    }

    getUserId(): string | undefined {
        return this.authService.readUserIdFromToken();
    }

}