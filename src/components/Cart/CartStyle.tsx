import styled from "styled-components";

export const CartContainer = styled.div`
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

    @media (max-width: 500px) {
        width: 80%;
    }
`

export const Title = styled.h5`
    margin-left: 20px;
`

export const NoOrders = styled.div`
    border-top: 1px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    & > p {
        font-size: ${({theme}) => theme.fontSize.small};
        font-family: ${({theme}) => theme.fontFamily.bold};
        margin-top: 60px;
        opacity: 0.8;
    }
`
