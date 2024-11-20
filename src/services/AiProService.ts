import { AxiosResponse } from "axios";
import { SERVICE_URL } from "../Constants";
import { http } from "./Interceptor";

export class AiProService {

    AI_PRO_ENDPOINT: string = `${SERVICE_URL}/ai-pro`;
    
    async getAiProDocumentBy(index: number): Promise<AxiosResponse> {
        return await http.get(`${this.AI_PRO_ENDPOINT}?index=${index}`);
    }

    async getNumberDocumentsOfUser(): Promise<AxiosResponse> {
        return await http.get(`${this.AI_PRO_ENDPOINT}/size`)
    }

}