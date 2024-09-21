import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./HomeRouter";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/404";

export const Router: FC = memo(() => {
  return (
    // <>
      <Routes>
        <Route path="/" element={<Login />} />
        {homeRoutes.map((route) => {
          return (
            <Route key={route.path} path={`/home${route.path}`} element={<route.element />} />
          )
        })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    // </>
  )
})