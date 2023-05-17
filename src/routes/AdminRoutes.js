import { createBrowserRouter } from "react-router-dom";
import React from "react";
import DefaultLayout from "../Admin/layout/DefaultLayout";
import Bill from "../Admin/page/Bill";
import Staff from "../Admin/page/Staff";
import Statistical from "../Admin/page/Statistical";
import ManagerProduct from "../Admin/page/managerProduct/MangerProduct";
import AddStaff from "../Admin/page/AddStaff";
import Login from "../component/form/Login.jsx";
import CreateProduct from "../Admin/page/managerProduct/CreateProduct";
import Register from "../component/form/Register";

const routesAdmin = createBrowserRouter([
  {
    path: "/admin",
    element: <DefaultLayout />,
    children: [
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "addstaff",
        element: <AddStaff />,
      },
      {
        path: "bill",
        element: <Bill />,
      },
      {
        path: "managerproduct",
        element: <ManagerProduct />,
      },
     
      {
        path: "statistical",
        element: <Statistical />,
      },
      {
        path : "addProduct",
        element : <CreateProduct/>
      }
      
    ],
    
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/register",
    element : <Register/>
  }
]);
export default routesAdmin;
