import {
  RectangleStackIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { Leveransstatus } from "@/pages/dashboard";
import { SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <TruckIcon {...icon} />,
        name: "leveransstatus",
        path: "/leveransstatus",
        element: <Leveransstatus />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
