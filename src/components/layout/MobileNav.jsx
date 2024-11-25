import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button className="bg-inherit" onClick={openDrawer}><FaBars size={25} /></Button>
      <Drawer open={open} placement="right" onClose={closeDrawer} className=" bg-primary text-primary">
        <div className="p-4 bg-black/60 h-full">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" className="text-tertiary">
              Zysk Groups
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            Material Tailwind features multiple React and HTML components, all
            written with Tailwind CSS classes and Material Design guidelines.
          </Typography>
          <div className="flex gap-2">
            <Button size="sm" variant="outlined">
              Documentation
            </Button>
            <Button size="sm"><FaBars /></Button>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}