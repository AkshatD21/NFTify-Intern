import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import vectorSvg from "../assets/vector.svg";
import BaseLineSvg from "../assets/BaseL.svg";
import FluentSvg from "../assets/Fluent.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#292929] sticky top-0">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src={vectorSvg} alt="brand" className="h-8 w-8 " />
        <Typography variant="h5" color="blue-gray" className="text-off-white heading">
          NFTify
        </Typography>
      </div>
      <List>
        <ListItem className="text-white" onClick={() => navigate('/token-address')}>
          <ListItemPrefix>
            <img src={BaseLineSvg} alt="brand" className="h-5 w-5" />
          </ListItemPrefix>
          Token Address
        </ListItem>
        <ListItem className="text-white" onClick={() => navigate('/pair-address')}>
          <ListItemPrefix>
            <img src={FluentSvg} alt="brand" className="h-5 w-5" />
          </ListItemPrefix>
          Pair Address
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar
