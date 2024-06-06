import axios, { AxiosResponse } from "axios";
import { SERVICE_URL } from "../Constants";
import { Token } from "../model/Token";
import { AuthRequest } from "../model/AuthRequest";
import { AuthResponse } from "../model/AuthResponse";
import { StorageService } from "./StorageService";
import { authenticatedJsonHeadersWith } from "../utils/HttpUtils";

export class AuthService {

    SERVICE_LOGIN_URL: string = `${SERVICE_URL}/users/authenticate`;

    storageService: StorageService = new StorageService();

    getUserId = async(): Promise<string | null | undefined> => {
        return await this.isLogged() ? 
            this.readUserIdFromToken()
            : null;
    }

    readUserIdFromToken = (): string | undefined => {
        return this.parseJwt(this.storageService.getToken())?.userId;
    }

    isLogged = async(): Promise<boolean> => {
        const tokenStr: string | null = this.storageService.getToken();

        if (!tokenStr) {
            return false;
        }

        const token: Token | null = this.parseJwt(tokenStr);

        if (!token) {
            return false;
        }

        const tokenDate: Date = new Date(token.exp * 1000);

        if (tokenDate > new Date()) {
            return true;
        }
      
        return await this.useRefreshToken();
      };

      isTokenValid = (): boolean => {
        const tokenStr: string | null = this.storageService.getToken();
        const refreshTokenStr: string | null = this.storageService.getRefreshToken();

        if (!tokenStr) {
            return false;
        }

        const token: Token | null = this.parseJwt(tokenStr);
        const refreshToken: Token | null = this.parseJwt(refreshTokenStr);

        if (!token || !refreshToken) {
            return false;
        }

        const tokenDate: Date = new Date(token.exp * 1000);
        const refreshTokenDate: Date = new Date(refreshToken.exp * 1000);
        const now: Date = new Date();

        return tokenDate > now || refreshTokenDate > now;
      }
      
      parseJwt = (token: string | null): Token | null => {
        if (token === null) {
            return null;
        }

        try {
            const base64Url = token.split('.')[1]; 
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
    
            return JSON.parse(jsonPayload);
        } catch (e) {
            return null;
        }
    }

    haveTokens = ():boolean => {
        return this.getToken() !== null && this.getRefreshToken() !== null;
    }

    async login(username: string, password: string): Promise<AxiosResponse> {
        const authRequest: AuthRequest = {
            email: username,
            password: password
        };
        return await axios.post(this.SERVICE_LOGIN_URL, authRequest, {
            headers: {
              'Content-Type': 'application/json',
            },
        });
    }

    saveTokensFrom(authResponse: AuthResponse) {
        this.storageService.saveTokensFrom(authResponse);
    }

    async useRefreshToken(): Promise<boolean> {
        const refreshToken: string | null = this.storageService.getRefreshToken();

        if (refreshToken === null) {
            return false
        }

        let hasLoggedIn: boolean = false;
        const refreshTokenParam = { refreshToken: refreshToken};
        await axios.get(this.SERVICE_LOGIN_URL, { params: refreshTokenParam })
            .then(resp => {
                const authResponse: AuthResponse = resp.data as AuthResponse;
                hasLoggedIn = true;
                this.storageService.saveTokensFrom(authResponse)
            })
            .catch(e => {
                hasLoggedIn = false;
            });

        return hasLoggedIn;
    }
    
    logout = () => {
        this.storageService.removeTokens();
    }

    getToken = (): string | null => {
        return this.storageService.getToken();
    }

    getRefreshToken = (): string | null => {
        return this.storageService.getRefreshToken();
    }

    ping = (): Promise<AxiosResponse> => {
        return axios.get(`${SERVICE_URL}/ping`, authenticatedJsonHeadersWith(this.getToken()));
    }

    applyRefreshToken = async(): Promise<AxiosResponse> => {
        const refreshToken: string | null = this.storageService.getRefreshToken();

        const refreshTokenParam = { refreshToken: refreshToken};
        return await axios.get(this.SERVICE_LOGIN_URL, { params: refreshTokenParam })
    }
    
    deleteTokens = () => {
        this.storageService.removeTokens();
    }

}