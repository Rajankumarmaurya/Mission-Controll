import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RouteIndex, RouteTaskList } from "../helper/RouteName";

const Navigation = () => {
 
    const buttonClass =
        "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100";

    const activeButtonClass =
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none";

    return (
        <>
         <h1 className="text-2xl font-bold text-red-600 text-center mb-8">Mission Control Dashboard</h1>
        
        <div className="pb-5 border-b flex gap-5">
           
            <NavLink
                to={RouteIndex}
                className={({ isActive }) =>
                    isActive ? activeButtonClass : buttonClass
                }
            >
                Add Mission
            </NavLink>
            <NavLink
                to={RouteTaskList}
                className={({ isActive }) =>
                    isActive ? activeButtonClass : buttonClass
                }
            >
                My Mission
            </NavLink>
        </div>
        </>
    );
};

export default Navigation;