import React from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

const Modal = (props) => {

    const elements = (
        <div>
            <header>
                {props.header}
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div>
                    <h2>{props.children}</h2>
                </div>
                <footer>
                    {props.footer}
                </footer>
            </form>
        </div>
    )

    const ModalOverlay = ReactDOM.createPortal(elements, document.getElementById("modal"))

    return (
        <React.Fragment>
            <BackDrop onClick={props.closeModal} />
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>

    )
}
export default Modal;