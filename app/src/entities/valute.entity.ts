

export class ValuteEntity {

    readonly id: string;
    readonly date: Date;
    readonly numCode: string;
    readonly charCode: string;
    readonly nominal: number;
    readonly name: string;
    private readonly _value: number;
    readonly previousValue: number;

    constructor(id: string, date: Date, numCode: string, charCode: string, nominal: number, name: string, value: number, previousValue: number) {
        this.id = id;
        this.date = date;
        this.numCode = numCode;
        this.charCode = charCode;
        this.nominal = nominal;
        this.name = name;
        this._value = value;
        this.previousValue = previousValue;
    }

    get trend(): string {
        return ((this._value / this.previousValue) * 100).toFixed(2) + "%" ;
    }

    get trendNum(): number {
        return (this._value /this.previousValue) * 100;
    }

    get value(): string {
        return this._value.toFixed(2)
    }
}