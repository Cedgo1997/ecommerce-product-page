import React from 'react'
import { images } from '../images'
import { CloseModal, ImageWrapper, ModalContainer, ModalImage, ModalImageContainer } from './ModalStyle'

interface ModalProps {
    setShowModal: Function;
    index: number;
};

export const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
    return (
        <>
            <ModalContainer>
                <ImageWrapper>
                    <CloseModal onClick={() => setShowModal(false)} />
                    <ModalImageContainer>
                        <ModalImage src={images[0].path} alt={images[0].alt} />
                    </ModalImageContainer>
                </ImageWrapper>
            </ModalContainer>
        </>
    )
}
