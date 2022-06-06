import {ReactNode} from "react";
import "./style/Modal.scss"
import CloseButton from "./CloseButton";

export function ModalChild(props: { children?: ReactNode, open: boolean, setOpen: Function }) {
    function closeModal() {
        props.setOpen(false);
    }
    if (!props.open) {
        return null;
    }
    return (
        <>
            <div className={"modal"}>
                <div className={"modal-header"}>
                    <div className={"modal-header-left"} />
                    <div className={"modal-header-right"}>
                        <CloseButton onClick={() => closeModal()} />
                    </div>
                </div>
                <div className={"modal-content"} >
                    {props.children}
                </div>
            </div>
            <div className={"modal-blur"} onClick={() => closeModal()} />
        </>
    );
}

export default function Modal(props: { children?: ReactNode, open: boolean, setOpen: Function }) {
    return (
        <ModalChild open={props.open} setOpen={props.setOpen}>
            {props.children}
        </ModalChild>
    )
}