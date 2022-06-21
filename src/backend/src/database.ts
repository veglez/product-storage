import mongoose from "mongoose";
import CONFIG from "./config";

const { mongoURL } = CONFIG;
console.log(`The mongo db connection is ${mongoURL}`)
mongoose
  .connect(mongoURL)
  .then((db) => {
    console.log(
      `Connection to the database successfully  in ${db.connection.host}`
    );
  })
  .catch((err) =>
    console.log("An error while trying to connect to the database: ", err)
  );
