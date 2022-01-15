import styled from "styled-components";
import { LargeImageContainer, Image } from "../SliderStyle";

export const ModalContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
`;

export const ModalImageContainer = styled(LargeImageContainer)`
    width: 390px;
`

export const ModalImage = styled(Image)`

`