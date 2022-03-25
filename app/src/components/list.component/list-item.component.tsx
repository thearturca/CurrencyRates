import { ValuteEntity } from "../../entities/valute.entity"

interface ListItemComponentProps {
    valute: ValuteEntity;
}

function ListItemComponent(props: ListItemComponentProps) {
    return (
    <li className="list-item" title={ props.valute.name }>
        <span className="char-code">
            {props.valute.charCode}
        </span>
        <span className="value" >
            {props.valute.value}
        </span>
        <span className={`trend ${props.valute.trendNum >= 100 ? props.valute.trend === "100.00%" ? "" : "trend-up" : "trend-down"}`}>
            {props.valute.trend}
        </span>
    </li>
    )
}

export default ListItemComponent