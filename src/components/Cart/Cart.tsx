import React from 'react'
import { CartContainer, NoOrders, Title } from './CartStyle'

export const Cart: React.FC = () => {
    return (
        <CartContainer>
            <Title>Cart</Title>
            <NoOrders>
                <p>Your cart is empty</p>
            </NoOrders>
        </CartContainer>
    )
}
