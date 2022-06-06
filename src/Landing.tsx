import './style/Landing.scss';
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {BACKEND} from "./App";

function generateCode(): string {
    const chars: string = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
    let code: string = '';
    for (let i: number = 0; i < 5; i++) {
        let pos: number = Math.floor(Math.random() * chars.length);
        code += chars[pos];
    }
    return code;
}

export default function Landing() {
    const navigate = useNavigate();
    const [code, setCode] = useState<string>(generateCode());
    const [name, setName] = useState<string>("Anonymous");
    async function joinLobby(attemptCode: string, name: string): Promise<boolean> {
        if (attemptCode !== "") {
            axios.post(BACKEND + "lobby/" + attemptCode, {"name": name}).then(
                res => {
                    if (res.status === 200) {
                        navigate("/lobby/" + attemptCode);
                        return true;
                    }
                    console.log(res.status + ": " + res.statusText);
                })
        }
        return false;
    }
    return (
        <div className={"boxed"}>
            <div className={"landing"}>
                <p className={"header landing-header"}>
                    Drink...
                </p>
                <div className={"landing-content"}>
                    <div className={"row-wrapper"}>
                        <p className={"text"}>Code</p>
                        <input className={"textbox"} type={"text"} placeholder={code} onChange={(e) => setCode(e.target.value)}/>
                    </div>
                    <div className={"row-wrapper"}>
                        <p className={"text"}>Name</p>
                        <input className={"textbox"} type={"text"} placeholder={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={"row-wrapper"}>
                        <button className={"butt"} onClick={() => joinLobby(code, name)}>Join or Create</button>
                    </div>
                    <Link to={"/rules"}><button className={"butt"}>Rules</button></Link>
                </div>
            </div>
        </div>
    );
}