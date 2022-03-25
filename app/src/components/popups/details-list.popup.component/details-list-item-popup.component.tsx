import { ValuteEntity } from "../../../entities/valute.entity"

interface DetailsListItemPopupComponentProps {
    valute: ValuteEntity;
}

function DetailsListItemPopupComponent(props: DetailsListItemPopupComponentProps) {
    return (
        <li className="list-item">
            <span className="date">
                {props.valute.date.toLocaleDateString()}
            </span>
            <span className="value">
                {props.valute.value}
            </span>
            <span className={`trend ${props.valute.trendNum >= 100 ? props.valute.trend === "100.00%" ? "" : "trend-up" : "trend-down"}`}>
                {props.valute.trend}
            </span>
        </li>
    )
}

export default DetailsListItemPopupComponent