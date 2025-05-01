import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import RegisterBuy from "./pages/registerBuy/RegisterBuy";
import RegisteredCoupons from "./pages/registeredCoupons/RegisteredCoupons"
import Profile from "./pages/profile/Profile";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/registerBuy",
        element: <Private> <RegisterBuy /> </Private> 
      },
      {
        path: "/registeredCupons",
        element: <Private> <RegisteredCoupons /> </Private> 
      },
      {
        path: "/profile",
        element: <Private> <Profile /> </Private> 
      }
    ]
  }
])
export { router }