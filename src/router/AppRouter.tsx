import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ProductScreen } from "../screens/Product/ProductScreen";
import { MainWrapper } from "./AppRouterStyle";

export const AppRouter = () => {
    return (
        <MainWrapper>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductScreen />} />
                <Route path="/collections" element={<ProductScreen />} />
                <Route path="/men" element={<ProductScreen />} />
                <Route path="/women" element={<ProductScreen />} />
                <Route path="/about" element={<ProductScreen />} />
                <Route path="/contact" element={<ProductScreen />} />
            </Routes>
        </MainWrapper>
    );
}