import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const reqInterceptor = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          logoutUser()
            .then(() => {
              navigate("/auth/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );
    return () => {
      instance.interceptors.request.eject(reqInterceptor);
    };
  }, [user, logoutUser]);
  return instance;
};

export default useAxiosSecure;
