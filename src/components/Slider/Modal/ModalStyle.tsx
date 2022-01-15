import styled, { useTheme } from "styled-components";
import { LargeImageContainer, Image, ProductThumbnailContainer, ProductThumbnail } from "../SliderStyle";
import { ReactComponent as CloseLogo } from './../../../assets/icons/icon-close.svg';

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
    background-color: rgba(0,0,0,0.8);
    z-index: 2;
`;

export const ImageWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const ModalImageContainer = styled(LargeImageContainer)`
    width: 390px;
`;

export const ModalImage = styled(Image)`

`;

export const ModalThumbnailContainer = styled(ProductThumbnailContainer)`
    display: flex;
    justify-content: space-around;
`;

export const ModalThumbnail = styled(ProductThumbnail)`
    width: 65px;
    height: 65px;
    z-index: 2;
`;

const Button = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    opacity: 0.5;
    &:hover {
        opacity: 1;
        cursor: pointer;
    };
`
export const CloseModal = ({ onClick }: any) => {

    const theme = useTheme();
    return (
        <Button onClick={onClick}><CloseLogo fill={theme.colors.primary.dark} /></Button>
    )
};
