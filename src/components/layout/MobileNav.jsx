import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../../utils/constant";
import { IoMdArrowDropdown } from "react-icons/io";
import MobileSubLinks from "./MobileSubLinks";
import logo from "../../assets/png/logo.png"
import { Link } from "react-router-dom";

export default function MobileNav({ navToggle }) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button className="bg-inherit" onClick={openDrawer}><FaBars size={25} /></Button>
      <Drawer open={open} placement="right" onClose={closeDrawer} className=" bg-primary text-primary">
        <div className="p-4 bg-black/60 h-full">
          <div className="mb-6 flex items-center text-tertiary text-sm justify-between">
            <div className="mb-6 flex items-center">
              <div className="w-[50px]">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <p className='ml-1'>ZYSK-GROUP</p>
            </div>
            <IconButton variant="text" className="text-secondary" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div>
            <ul className="text-xl text-tertiary">
              {!navToggle && <li onClick={closeDrawer} className="mb-4 hover:text-secondary">
                <a href={"/"}>Home</a>
              </li>}
              {navLinks.map((each) => {
                if (each.subNav) {
                  return (
                    <li key={each.id}>
                      <MobileSubLinks each={each} />
                    </li>)
                } else if (!each.subNav && navToggle) {
                  return (
                    <li onClick={closeDrawer} key={navToggle ? each.id : "/"} className="mb-4 hover:text-secondary">
                      <a href={each.link}>{each.text}</a>
                    </li>
                  )
                } else return null;
              })}
            </ul>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}