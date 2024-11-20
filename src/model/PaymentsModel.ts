export interface Session {
    userId: string
    sessionId: string
    clientSecret: string
}

export interface PaymentUpdateResponse {
    userId: string
    url: string
}