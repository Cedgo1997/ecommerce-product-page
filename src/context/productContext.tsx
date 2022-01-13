import React, { useState } from 'react';


interface Product {
    name: string,
    price: number,
    quantity: number
}

interface ProductContextProps {
    addProduct: Function;
    products: Product[]
}



export const ProductContext = React.createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {

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