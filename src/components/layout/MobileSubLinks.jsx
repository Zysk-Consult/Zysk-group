import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function MobileSubLinks({ each }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion  open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="text-tertiary hover:text-secondary border-b-0 text-lg font-medium" onClick={() => handleOpen(1)}>{each.text}</AccordionHeader>
                <AccordionBody>
                    <ul>
                    {each.subNav?.map((sub) => (
                            <li key={sub.text} className="mb-4 hover:text-secondary text-tertiary">
                                <a href={sub.link}>{sub.text}</a>
                            </li>
                        ))}
                    </ul>
                </AccordionBody>
            </Accordion>
        </>
    );
}