import React from 'react';
import styled, { keyframes } from "styled-components";
import { currencyFormat } from '../../helpers/currencyFormat';

interface Cart {
  showCart: boolean;
};

interface OrderProps {
  name: string;
  price: number;
  quantity: number;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const CartContainer = styled.div<Cart>`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
    position: absolute;
    right: 40px;
    top: 60px;
    width: 300px;
    min-height: 220px;

    visibility: ${props => props.showCart ? 'visible' : 'hidden'};
    animation: ${props => props.showCart ? fadeIn : fadeOut} 0.3s linear;
    transition: visibility 0.3s linear;

    @media (max-width: 500px) {
        width: 80%;
    }
`

export const Title = styled.h5`
    padding: 0 0 15px 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const NoOrders = styled.div`
    display: flex;
    justify-content: center;
    & > p {
        font-size: ${({ theme }) => theme.fontSize.small};
        font-family: ${({ theme }) => theme.fontFamily.bold};
        margin-top: 50px;
        opacity: 0.8;
    }
`

const OrderContainer = styled.div`
    padding: 10px;

`

const OrderImage = styled.div`

`

const OrderText = styled.div`
    display: flex;
    flex-direction: column;
`

const OrderName = styled.p`
    font-size: ${({ theme }) => theme.fontSize.small};
    font-family: ${({ theme }) => theme.fontFamily.normal};
`

const OrderPrice = styled.p`
`

export const Order: React.FC<OrderProps> = ({ name, price, quantity }) => (
  <OrderContainer>
    <OrderImage><img src={require('./../../assets/images/image-product-1-thumbnail.jpg')} alt={name} /></OrderImage>
    <OrderText>
      <OrderName>{name}</OrderName>
      <OrderPrice>{currencyFormat(price)} x {quantity} <strong>{currencyFormat(price * quantity)}</strong></OrderPrice>
    </OrderText>
  </OrderContainer>
);