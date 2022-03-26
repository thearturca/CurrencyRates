import PortalComponent from "../portal.component/portal.component";
import "./modal.component.css"

interface ModalComponentProps {
    onClose(): void;
    isOpened: boolean;
    children?: React.ReactNode;
}

function ModalComponent(props: ModalComponentProps) {
  if (!props.isOpened) {
    return null;
  }


  return (
    <PortalComponent>
      <div className="modal" role="dialog">
          <div 
            className={`modal-overlay ${props.isOpened ? "active": ""}`}
            role="button"
            tabIndex={0}
            onClick={() => props.onClose()}
          />
          <div className={`modal-content ${props.isOpened ? "active" : ""}`}>
              { props.children }
          </div>
      </div>
    </PortalComponent>
  )
}

export default ModalComponent