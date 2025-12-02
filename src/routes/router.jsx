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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        element: <Home />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "all-skills",
        loader: () => fetch("/data.json"),
        element: <AllSkills />,
        hydrateFallbackElement: <Loading />,
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
        path: ":id",
        loader: () => fetch("/data.json"),
        element: <SkillDetails />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "about",
        element: <AboutUs />,
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
    ],
  },
]);
