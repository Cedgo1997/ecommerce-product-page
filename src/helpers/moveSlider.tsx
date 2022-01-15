import React from 'react';
import { images } from "../components/Slider/images";

export const nextImage = (isActive: number, setIsActive: React.Dispatch<React.SetStateAction<number>>, setImage: React.Dispatch<React.SetStateAction<string>>) => {
    if (isActive != 3) {
        setIsActive(isActive + 1);
        setImage(images[isActive + 1].path);
    }
};

export const previousImage = (isActive: number, setIsActive: React.Dispatch<React.SetStateAction<number>>, setImage: React.Dispatch<React.SetStateAction<string>>) => {
    if (isActive != 0) {
        setIsActive(isActive - 1);
        setImage(images[isActive - 1].path);
    }
};