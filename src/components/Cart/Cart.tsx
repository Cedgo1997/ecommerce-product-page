import React from 'react'
import { CartContainer, NoOrders, Title } from './CartStyle'

interface CartInterface {
    showCart: boolean;
}

export const Cart: React.FC<CartInterface> = ({ showCart }) => {
    return (
        <CartContainer showCart={showCart}>
            <Title>Cart</Title>
            <NoOrders>
                <p>Your cart is empty</p>
            </NoOrders>
        </CartContainer>
    )
}
