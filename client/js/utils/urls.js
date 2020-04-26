export const getRootUrl = () =>
  process.env.NODE_ENV === "production"
    ? "https://moneat.herokuapp.com"
    : "http://localhost:3000";

export const ROOT_EP = getRootUrl();

export const AUTH_EP = `${ROOT_EP}auth/`;

export const params = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  credentials: "same-origin",
  withCredentials: true,
};
