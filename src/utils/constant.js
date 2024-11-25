import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const navLinks = [
    {
        id: "1",
        text: "About Us",
        link: "/about"
    },
    {
        id: "2",
        text: "Our Companies",
        link: "/companies",
        subNav: [
            {
                text: "Zysk Technologies",
                link: "/technology"
            },
            {
                text: "Zysk Consulting",
                link: "/consulting"
            },
            {
                text: "Zysk Foods",
                link: "/technology"
            },
            {
                text: "Zysk Construction $ Real Estate",
                link: "/constructions"
            },
            {
                text: "Zysk Capital",
                link: "/capital"
            },
        ]
    },
    {
        id: "3",
        text: "Services",
        link: "/services",
        subNav: null
    },
    {
        id: "4",
        text: "News & Updates",
        link: "/news",
        subNav: null
    },
    {
        id: "5",
        text: "Contact Us",
        link: "/contact",
        subNav: null
    },
]

