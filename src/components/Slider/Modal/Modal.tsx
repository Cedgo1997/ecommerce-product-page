import React from 'react'
import { images } from '../images'
import { ModalContainer, ModalImage, ModalImageContainer } from './ModalStyle'

export const Modal: React.FC = () => {
    return (
        <ModalContainer>
            <ModalImageContainer>
                <ModalImage src={images[0].path} alt={images[0].alt} />
            </ModalImageContainer>
        </ModalContainer>
    )
}
