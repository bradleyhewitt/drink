import './style/Landing.scss';
import React from "react";
import {JoinLobby} from "./JoinLobby";
import {Link} from "react-router-dom";

export default function Landing() {
    function generateLobbyCode(): string {
        const chars: string = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
        let code: string = '';
        for (let i: number = 0; i < 5; i++) {
            let pos: number = Math.floor(Math.random() * chars.length);
            code += chars[pos];
        }
        return code;
    }
    return (
        <div className={"boxed"}>
            <div className={"landing"}>
                <p className={"header landing-header"}>
                    Drink...
                </p>
                <div className={"landing-content"}>
                    <JoinLobby />
                    <Link to={"/lobby/" + generateLobbyCode()}><button className={"butt"}>Create Lobby</button></Link>
                    <Link to={"/rules"}><button className={"butt"}>Rules</button></Link>
                </div>
            </div>
        </div>
    );
}