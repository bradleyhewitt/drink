import './style/Landing.scss';
import {useParams} from "react-router";
import {useQuery} from "react-query";
import axios from "axios";
import {BACKEND} from "./App";

interface Player {
    name: string;
    jwt: string;
    score: number;
}

interface LobbyData {
    lobby_id: string;
    players: Player[];
}

function lobbyIcon(): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg>
    )
}

function playersIcon(): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
        </svg>
    )
}

function checkIcon(): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
        </svg>
    )
}

export default function Lobby() {
    const params = useParams();
    const {isLoading, isError, data} = useQuery(['lobby', params.id], () =>
        axios.get(BACKEND + "lobby/" + params.id).then(res => res.data));
    if (isError) {
        return <p className={"text"}>Error...</p>;
    } else if (isLoading) {
        return <p className={"text"}>Loading...</p>
    }
    return (
        <div className={"boxed"}>
            <div className={"row-wrapper"}>{lobbyIcon()}<h1 className={"text"}>Lobby</h1><p className={"text"}>{data.lobby_id}</p></div>
            <div className={"row-wrapper"}>{playersIcon()}<h2 className={"text"} style={{textDecoration: "underline"}}>Players</h2></div>
            {data.players.map((p: {name: string, score: number}) => {
                return <div className={"row-wrapper"}>{checkIcon()}<p className={"text"}>{p.name}</p><p className={"text"} style={{color: "#AAAAAA"}}>{p.score}</p></div>;
            })}
        </div>
    );
}