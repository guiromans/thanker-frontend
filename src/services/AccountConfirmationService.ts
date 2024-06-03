import { SERVICE_URL } from "../Constants";
import axios, { AxiosResponse } from "axios";

export class AccountConfirmationService {
    
    async confirmAccount(userId: string, confirmationId: string): Promise<AxiosResponse> {
        const confirmationUrl = `${SERVICE_URL}/users/${userId}/activate/${confirmationId}`;

        return await axios.get(confirmationUrl);
    }

}