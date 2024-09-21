import { FC } from "react";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

type RouteType = {
  path: string;
  element: FC;
}

export const homeRoutes: RouteType[] = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/user_management',
    element: UserManagement
  },
  {
    path: '/setting',
    element: Setting
  }
];