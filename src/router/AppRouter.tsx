import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "../App";

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </div>
    );
}