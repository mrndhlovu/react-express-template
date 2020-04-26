const dotenv = require("dotenv");
dotenv.config();

const environment = process.env.DEVELOPMENT ? "development" : "production";
const PORT = process.env.PORT || 3000;
const CLIENT_URL = "http//localhost:3000" || `${process.env.PROD_URL}:${PORT}`;
const CONNECTION_URI = process.env.MONGODB_URI;
const LOCAL_MONGO_DB = process.env.LOCAL_MONGO_DB;
const S_GRID_API_KEY = process.env.SEND_GRID_API_KEY;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const TOKEN_SIGNATURE = process.env.TOKEN_SIGNATURE;

module.exports = {
  CLIENT_URL,
  CONNECTION_URI,
  environment,
  LOCAL_MONGO_DB,
  PORT,
  S_GRID_API_KEY,
  SENDER_EMAIL,
  TOKEN_SIGNATURE,
};
