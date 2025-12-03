import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";

import SkillDetails from "../pages/SkillDetails";
import AboutUs from "../pages/AboutUs";
import Loading from "../components/Loading";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ProfileCard from "../components/ProfileCard";
import UpdateProfile from "../components/UpdateProfile";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import AllSkills from "../pages/AllSkills";
import ContactSection from "../pages/ContactSection";
import OfferSkills from "../pages/OfferSkills";
import MySkills from "../pages/MySkills";
import MyBookings from "../pages/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        element: <Home />,
      },
      {
        path: "all-skills",
        loader: () => fetch("http://localhost:5000/skills"),
        element: <AllSkills />,
      },
      {
        path: "my-offered-skills",
        element: (
          <PrivateRoute>
            <MySkills />
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "offer-skills",
        element: (
          <PrivateRoute>
            <OfferSkills />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <ContactSection />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <ProfileCard />,
          },
          {
            path: "update-profile",
            element: <UpdateProfile />,
          },
        ],
      },
      {
        path: "skillDetails/:id",
        element: <SkillDetails />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
