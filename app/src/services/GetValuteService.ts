import { ValuteEntity } from "../entities/valute.entity";
import { cbrDTO, cbrValute } from "./cbr-valute.dto";


export class GetValuteService {

    static async getDailyCbrDTO(): Promise<cbrDTO> {
        return await (await fetch("https://www.cbr-xml-daily.ru/daily_json.js")).json();
    }

    static async getDailyValute(): Promise<ValuteEntity[]> {
        const res: cbrDTO = await this.getDailyCbrDTO()
        return this.mapToValuteEntities(res);
    }

    static async getLastTenDays(): Promise<ValuteEntity[]> {
        let valutesLastTenDays: ValuteEntity[] = [];
        const res: cbrDTO = await this.getDailyCbrDTO();
        let link: string = res.PreviousURL;

        for(let i= 0;  i <= 10; i++) {
            try {
                const res:cbrDTO = await (await fetch(link)).json();
                link = res.PreviousURL;
                valutesLastTenDays = [...valutesLastTenDays, ...this.mapToValuteEntities(res)];
            } 
            catch (e){
                console.log(e);
            }
        }
        return valutesLastTenDays
    }

    static mapToValuteEntities(cbrDTO: cbrDTO): ValuteEntity[] {
        const mappedValute: ValuteEntity[] = [];
        Object.keys(cbrDTO.Valute).forEach((valute) => [
            mappedValute.push(this.mapCbrToValuteEntity(cbrDTO.Valute[valute], new Date(cbrDTO.Timestamp)))
        ]); 
        return mappedValute;
    }

    static mapCbrToValuteEntity(cbrValute: cbrValute, date: Date): ValuteEntity {
        return new ValuteEntity(cbrValute.ID, date, cbrValute.NumCode, cbrValute.CharCode, cbrValute.Nominal, cbrValute.Name, cbrValute.Value, cbrValute.Previous);
    }
}