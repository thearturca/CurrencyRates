export interface cbrValute {
    ID: string;
    NumCode: string;
    CharCode: string;
    Name: string;
    Nominal: number;
    Previous: number;
    Value: number;
}

export interface cbrDTO {
    PreviousURL: string;
    Timestamp: string;
    Valute: {[key: string]: cbrValute};
}