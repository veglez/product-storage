import express from "express";
import cors from "cors";

// utils
import CONFIG from "./config";
import DefineRoutes from "./routes";

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  DefineRoutes(app);

  app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on port ${CONFIG.PORT}`);
  });

  //     const apolloServer = new ApolloServer({
  //         schema: await buildSchema({
  //             resolvers: [__dirname + '/**/*.resolver.ts'],
  //             validate: false,
  //         }),
  //         context: ({ req }: ApolloContext) => ({ req }),
  // });
  //     await apolloServer.start();
  //     apolloServer.applyMiddleware({ app });
  //     app.listen(CONFIG.PORT, CONFIG.HOSTNAME, () => {
  //         console.log(`Server started at http://${CONFIG.HOSTNAME}:${CONFIG.PORT}`);
  //     });
};

main().catch((err) => console.error(err.stack));
