import {useState} from "react";
import "./style/Modal.scss"
import Modal from "./Modal";

export function JoinLobby() {

    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <button className={"butt"} onClick={() => setOpen(true)}>Join Lobby</button>
            <Modal open={open} setOpen={setOpen}>
                <div className={"join-lobby"}>
                    <div className={"join-lobby-content"}>
                        <button className={"butt"}>Join Lobby</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}