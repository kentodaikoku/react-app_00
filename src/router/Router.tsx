import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { homeRoutes } from "./HomeRouter";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {homeRoutes.map((route) => {
        return (
          <Route 
            key={route.path} 
            path={`/home${route.path}`} 
            element={<HeaderLayout><route.element /></HeaderLayout>} 
          />
        )
      })}
      {/* 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})