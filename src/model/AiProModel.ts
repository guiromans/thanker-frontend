export interface AiPro {
    id: string
    userId: string
    index: number
    date: Date
    analysis: string
    messageOfTheDay: string
    gratitudeStats: Map<string, number>
    famousQuote: FamousQuote
    highlights: string
}

export interface FamousQuote {
    name: string
    quote: string
}

export interface AiProDocumentsSizeResponse {
    userId: string
    size: number
}