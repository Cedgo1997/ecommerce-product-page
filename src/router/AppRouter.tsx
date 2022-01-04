import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Navbar } from "../components/Navbar/Navbar";
import { AboutScreen } from "../screens/About/AboutScreen";
import { ContactScreen } from "../screens/Contact/ContactScreen";
import { ProductScreen } from "../screens/Product/ProductScreen";
import { ProductsScreen } from "../screens/Products/ProductsScreen";

export const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/collections" element={<ProductsScreen />} />
                <Route path="/men" element={<ProductScreen />} />
                <Route path="/women" element={<ProductScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
            </Routes>
        </div>
    );
}