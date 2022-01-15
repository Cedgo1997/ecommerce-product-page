import React, { useContext } from 'react'
import { ProductContext } from '../../context/productContext'
import { CartContainer, CheckoutButton, NoOrders, Order, Title } from './CartStyle'

interface CartInterface {
    showCart: boolean;
}

export const Cart: React.FC<CartInterface> = ({ showCart }) => {

    const { products, deleteProduct } = useContext(ProductContext);

    return (
        <CartContainer showCart={showCart}>
            <Title>Cart</Title>
            {
                products.length === 0
                    ? (<NoOrders>
                        <p>Your cart is empty</p>
                    </NoOrders>)
                    : <>
                        {products.map(({ name, price, quantity }, index) => (
                            <Order
                                key={index + 1}
                                name={name}
                                price={price}
                                quantity={quantity}
                                index={index}
                                deleteOrder={deleteProduct}
                            />
                        ))}
                        <CheckoutButton text='Checkout' />
                    </>
            }
        </CartContainer>
    )
}
