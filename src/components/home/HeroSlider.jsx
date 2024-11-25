import { Carousel } from "@material-tailwind/react";
import imag1 from "../../assets/jpg/1.jpg"
import imag2 from "../../assets/jpg/2.jpg"
import imag3 from "../../assets/jpg/3.jpg"
import imag4 from "../../assets/jpg/4.jpg"
import imag5 from "../../assets/jpg/5.jpg"

export default function HeroSlider() {
    const images = [
        {
            id: 1,
            src: imag1,
            groupTitle: "Technology"
        },
        {
            id: 1,
            src: imag2,
            groupTitle: "Consulting"
        },
        {
            id: 1,
            src: imag3,
            groupTitle: "Food Processing"
        },
        {
            id: 1,
            src: imag1,
            groupTitle: "Construction"
        },
        {
            id: 1,
            src: imag1,
            groupTitle: "Capital Investment"
        },
    ]
    return (
        <Carousel className="rounded-xl">
            {
                images.map((each) => (
                    <img
                        src={each.src}
                        alt={each.groupTitle}
                        className="h-full w-full object-cover"
                    />
                ))
            }
        </Carousel>
    );
}