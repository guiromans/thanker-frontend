import { AxiosResponse } from "axios";

export const emptyAxiosResponse = (): AxiosResponse<any> => {
    const response: Partial<AxiosResponse<any>> = {
        data: {},
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
        request: {}
    };

    return response as AxiosResponse<any>;
}