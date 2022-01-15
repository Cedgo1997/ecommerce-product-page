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
                <Route path="/ecommerce-product-page/" element={<ProductScreen />} />
            </Routes>
        </MainWrapper>
    );
}