import React, { useState } from 'react';
import { Product } from '../interfaces/product';

interface ProductContextProps {
    addProduct: Function;
    products: Product[]
}


export const ProductContext = React.createContext({} as ProductContextProps);

export const ProductProvider: React.FC = ({ children }) => {

    const [products, setProducts] = useState([] as Product[]);

    const addProduct = (product: Product) => {

        setProducts((state) => {
            return [
                ...state,
                product
            ]
        });
    };

    return (
        <ProductContext.Provider value={{
            products,
            addProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}