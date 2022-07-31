import React from "react";
import { PathRouteProps, Route, Routes } from "react-router-dom";
import {BlogList} from "../pages/BlogList"

const routes: PathRouteProps[] = [
    {
        path: "/",
        element: <BlogList/>
    }
];

export const AppRoutes = () => {
    return(
        <Routes>
        {routes.map((props, index) => (
            <Route {...props} key={index}/>
        ))}
        </Routes>
    )
}