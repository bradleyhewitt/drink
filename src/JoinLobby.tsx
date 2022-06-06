import {useState} from "react";
import "./style/Modal.scss"
import Modal from "./Modal";
import {useNavigate} from "react-router-dom";

export function JoinLobby() {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const [code, setCode] = useState<string>("");
    const [name, setName] = useState<string>("Anonymous");
    function joinLobby(attemptCode: string): boolean {
        if (attemptCode !== "") {
            navigate("/lobby/" + attemptCode);
            return true;
        }
        return false;
    }
    return (
        <>
            <button className={"butt"} onClick={() => setOpen(true)}>Join Lobby</button>
            <Modal open={open} setOpen={setOpen}>
                <div className={"join-lobby"}>
                    <div className={"join-lobby-content"}>
                        <div className={"row-wrapper"}>
                            <p className={"text"}>Lobby Code</p>
                            <input className={"textbox"} type={"text"} onChange={(e) => setCode(e.target.value)}/>
                        </div>
                        <div className={"row-wrapper"}>
                            <p className={"text"}>Display Name</p>
                            <input className={"textbox"} type={"text"} placeholder={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <button className={"butt"} onClick={() => joinLobby(code)}>Join Lobby</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}