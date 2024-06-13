import './styles/App.scss';
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Single from "./routes/Single";
import Landing from "./routes/Landing";
import Signup from "./components/security/Signup";
import Login from "./components/security/Login";

export default function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />}/>
                    <Route path="/p/:singleId" element={<Single />}/>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/s/signup" element={<Signup/>}/>
                    <Route path="/s/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
