import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 8000,
  HOSTNAME: process.env.HOSTNAME || "localhost",
  jwtAccess: process.env.JWT_ACCESS,
  mongoURL: process.env.MONGO_URL || `mongodb://mongodb:27017/store`,
};

export default CONFIG;
