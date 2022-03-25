import { Link } from "react-router-dom";
import ListItemComponent from "./list-item.component"

import { GET_ENUMS, GET_PARAMS } from "../../consts/router";
import { ValuteEntity } from "../../entities/valute.entity"

import "./list.component.css"

interface ListComponentProps {
    valutes: ValuteEntity[] | undefined;
}

function ListComponent(props: ListComponentProps) {

    if (props.valutes === undefined) {
        return null;
    }
    
    props.valutes.sort((a, b) => {
        if (a.charCode < b.charCode ) return -1;
        if (a.charCode > b.charCode) return 1;
        return 0;
    });

    return (
        <ul  className="list">
            {props.valutes.map((valute) => {
                return  <Link to={ `?${GET_PARAMS.popup}=${GET_ENUMS.deatails}&${GET_PARAMS.valute}=${valute.id}&${GET_PARAMS.valuteName}=${valute.charCode}` } key= {valute.id}>
                    <ListItemComponent key={ valute.id } valute={ valute }/>
                </Link>
            })}
        </ul>
    )
}

export default ListComponent