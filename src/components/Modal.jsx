import "./Modal.css";

function Modal({ abierto, onCerrar, children }) {
    if (!abierto) return null;

    return (
        <div className="modal-fondo" onClick={onCerrar}>
            <div className="modal-caja" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default Modal;