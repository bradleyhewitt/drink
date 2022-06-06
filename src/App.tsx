import React from 'react';
import './style/App.scss';
import Landing from "./Landing";
import {HashRouter, Route, Routes} from "react-router-dom";
import Lobby from "./Lobby";
import Rules from "./Rules";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient: QueryClient = new QueryClient();

export const BACKEND: string = "http://drink-env.eba-3gejpmdd.us-west-2.elasticbeanstalk.com/";

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <div className="content">
            <HashRouter basename={"/drink"}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/lobby/:id" element={<Lobby />} />
                    <Route path="/rules" element={<Rules />} />
                </Routes>
            </HashRouter>
        </div>
      </QueryClientProvider>
  );
}

export default App;
