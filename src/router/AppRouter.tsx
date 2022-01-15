import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ProductsScreen } from "../screens/Products/ProductsScreen";
import { MainWrapper } from "./AppRouterStyle";

export const AppRouter = () => {
    return (
        <MainWrapper>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductsScreen />} />
                <Route path="/collections" element={<ProductsScreen />} />
                <Route path="/men" element={<ProductsScreen />} />
                <Route path="/women" element={<ProductsScreen />} />
                <Route path="/about" element={<ProductsScreen />} />
                <Route path="/contact" element={<ProductsScreen />} />
            </Routes>
        </MainWrapper>
    );
}