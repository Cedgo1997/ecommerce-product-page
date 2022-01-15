import { images } from "../components/Slider/images";

export const nextImage = (isActive: number, setIsActive: any, setImage: any) => {
    if (isActive != 3) {
        setIsActive(isActive + 1);
        setImage(images[isActive + 1].path);
    }
};

export const previousImage = (isActive: number, setIsActive: any, setImage: any) => {
    if (isActive != 0) {
        setIsActive(isActive - 1);
        setImage(images[isActive - 1].path);
    }
};