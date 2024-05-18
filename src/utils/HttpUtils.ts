import { AxiosRequestConfig } from "axios"

export const authenticatedJsonHeadersWith = (token: string | null, params: any = null): AxiosRequestConfig => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          params: params
    }
}