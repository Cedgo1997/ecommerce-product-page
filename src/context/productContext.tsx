import React, { useState } from 'react';
import { Product, ProductImage } from '../interfaces/product';

interface ProductContextProps {
    addProduct: Function;
    deleteProduct: Function;
    products: Product[]
}


export const ProductContext = React.createContext({} as ProductContextProps);

export const ProductProvider: React.FC = ({ children }) => {

    const [products, setProducts] = useState([] as Product[]);

    const addProduct = (product: Product) => {

        setProducts((state: Product[]) => {
            return [
                ...state,
                product
            ]
        });
    };

    const deleteProduct = (index: number) => {
        setProducts((state: Product[]) => {
            return [...state.slice(0, index), ...state.slice(index + 1,)];
        })
    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}