import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 8000,
  HOSTNAME: process.env.HOSTNAME || "localhost",
  jwtAccess: process.env.JWT_ACCESS,
};

export default CONFIG;
