import styled from "styled-components";
import { ReactComponent as PreviousLogo } from './../../assets/icons/icon-previous.svg';
import { ReactComponent as NextLogo } from './../../assets/icons/icon-next.svg';

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
        display: flex;
        align-items: center;
        justify-content: center;
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
            cursor: pointer;
        }
    }

`

// Slider Button on mobile
const ButtonsContainer = styled.div`
    position: absolute;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SliderRoundedButton = styled.button`
    border: none;
    border-radius: 50%;
    background-color: white;
    width: 40px;
    height: 40px;
    & > .previous {
        margin-right: 5px;
    };
    & > .next {
        margin-left: 2px;
    }
    & > .icon {
        stroke: black;
    };
    &:hover {
        cursor: pointer;
        & > .icon {
            stroke: ${({ theme }) => theme.colors.primary.dark};
        }
    }
`;

export const SliderButtons = ({ next, previous }: any) => (
    <ButtonsContainer>
        <SliderRoundedButton onClick={previous}>
            <PreviousLogo className="previous icon" />
        </SliderRoundedButton>
        <SliderRoundedButton onClick={next}>
            <NextLogo className="next icon" />
        </SliderRoundedButton>
    </ButtonsContainer>
);