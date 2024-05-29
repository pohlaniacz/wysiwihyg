import './styles/App.scss';
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Single from "./routes/Single";
import Landing from "./routes/Landing";

export default function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />}/>
                    <Route path="/p/:id" element={<Single />}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
