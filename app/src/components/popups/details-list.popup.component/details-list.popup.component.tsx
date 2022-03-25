import { ValuteEntity } from "../../../entities/valute.entity"
import DetailsListItemPopupComponent from "./details-list-item-popup.component"

import "./details-list.popup.component.css"

interface DetailsListPopupComponentProps {
    valutes: ValuteEntity[]
}

function DetailsListPopupComponent(props: DetailsListPopupComponentProps) {
  return (
    <ul className="list">
      <li className="list-item list-header">
        <span>
          Дата
        </span>
        <span>
        Курс
        </span>
        <span className="trend-header">
          Тренд
        </span>
      </li>
    {props.valutes.map((valute, i) => {
      return <DetailsListItemPopupComponent valute={valute} key={ i }></DetailsListItemPopupComponent>
    })}
    </ul>
  )
}

export default DetailsListPopupComponent