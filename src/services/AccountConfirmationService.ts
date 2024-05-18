import { SERVICE_URL } from "../Constants";
import axios, { AxiosResponse } from "axios";

export class AccountConfirmationService {
    CONFIRMATION_BASE_URL = `${SERVICE_URL}/users/activate`;

    async confirmAccount(userId: string, confirmationId: string): Promise<AxiosResponse> {
        const confirmationUrl = `${this.CONFIRMATION_BASE_URL}/${userId}/${confirmationId}`;

        return await axios.get(confirmationUrl);
    }

}