import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useGetParameter from "../../../hooks/useGetParameter";

import { GET_PARAMS } from "../../../consts/router";
import { ValuteEntity } from "../../../entities/valute.entity";
import { GetValuteService } from "../../../services/GetValuteService";

import DetailsListPopupComponent from "../details-list.popup.component/details-list.popup.component";
import ModalComponent from "../modal.component/modal.component"

import "./details.popup.component.css"

interface DetailsPopupComponentProps {
  isOpened: boolean;
}

function DetailsPopupComponent(props: DetailsPopupComponentProps) {

  const valuteId = useGetParameter(GET_PARAMS.valute);
  const valuteName = useGetParameter(GET_PARAMS.valuteName)

  const [valuteState, setValuteState] = useState<ValuteEntity[]>([]);
  const navigate: NavigateFunction = useNavigate();

  const onClose = () => {
      navigate(-1);
  }

  useEffect(() => {
    const getLastTenDays = async () => {
      const res: ValuteEntity[] = await GetValuteService.getLastTenDays();
      const valuteById: ValuteEntity[] =  res.filter((valute) => {
        if (valute.id === valuteId) return valute
      });
      setValuteState([...valuteById]);
    }
    getLastTenDays();
  }, [])

  return (
      <ModalComponent isOpened= { props.isOpened } onClose={ onClose }>
          <header className="modal-header">
            <h1>
              Курс {valuteName} за последние 10 дней
            </h1>
            <button onClick={ onClose } className="btn-close">X</button>
          </header>
          <main className="modal-main">
            <DetailsListPopupComponent valutes={ valuteState }/>
          </main>
      </ModalComponent>
    )
}

export default DetailsPopupComponent