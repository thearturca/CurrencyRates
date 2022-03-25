import { GET_ENUMS } from "../../../consts/router";
import useGetPopupState from "./hooks/useGetPopupState";
import DetailsPopupComponent from "../details.popup.component/details.popup.component";

interface GetParameterPopupsProps {
}

function GetParameterPopups(props: GetParameterPopupsProps) {
    const { mountedPopup, isOpened } = useGetPopupState();
    switch(mountedPopup) {
        case GET_ENUMS.deatails:
            return <DetailsPopupComponent isOpened={ isOpened }/>
        default:
            return <></>
    }
}

export default GetParameterPopups;