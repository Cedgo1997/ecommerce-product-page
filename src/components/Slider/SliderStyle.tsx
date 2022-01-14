import styled from "styled-components";

interface ThumbnailsProps {
    active: boolean;
}

export const ProductImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LargeImageContainer = styled.div`
    width: 380px;
    height: 390px;
    @media (max-width: 500px) {
        width: 100vw;
        height: auto;
    }
`

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 5%;
    @media (max-width: 500px) {
        border-radius: 0;
    }
`

export const ProductThumbnailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 380px;
`

export const ProductThumbnail = styled.div<ThumbnailsProps>`
    border-radius: 10%;
    width: 75px;
    height: 75px;
    margin-top: 3%;
    outline: ${(props) => props.active && `3px solid ${props.theme.colors.primary.dark}`};
    
    & > img {
        border-radius: inherit;
        width: inherit;
        height: inherit;
        opacity: ${(props) => props.active && 0.5};
        &:hover{
            opacity: 0.8;
        }
    }

`