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
                <Route path="/ecommerce-product-page/collections" element={<ProductScreen />} />
                <Route path="/ecommerce-product-page/men" element={<ProductScreen />} />
                <Route path="/ecommerce-product-page/women" element={<ProductScreen />} />
                <Route path="/ecommerce-product-page/about" element={<ProductScreen />} />
                <Route path="/ecommerce-product-page/contact" element={<ProductScreen />} />
            </Routes>
        </MainWrapper>
    );
}