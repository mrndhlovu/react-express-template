import axios from "axios";

import { AUTH_EP } from "../utils/urls";

export const requestAuthSignup = (body) =>
  axios.post(`${AUTH_EP}/signup`, body, { withCredentials: true });

export const requestAuthLogin = (body) =>
  axios.post(`${AUTH_EP}/login`, body, params);

export const requestAuthLogout = () =>
  axios.post(`${AUTH_EP}/logoutAll`, null, params);

export const userInfo = () =>
  axios.get(`${AUTH_EP}/users/me`, { withCredentials: true });

export const requestUserUpdate = (body) =>
  axios.patch(`${AUTH_EP}/update`, body, params);
