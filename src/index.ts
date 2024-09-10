import dotenvFlow from "dotenv-flow";
import Logging from "./library/logging";
import { Request, Response } from "express";
import express from "express";
import cors from "cors";

// import initiateRoutes from "./routes";

dotenvFlow.config();

const app = express();

const restrictToOrigin = process.env.RESTRICT_TO_ORIGIN ? process.env.RESTRICT_TO_ORIGIN.split(",") : false;

app.use(cors({ origin: restrictToOrigin || "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/health-check", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", from: "server" });
});

// initiateRoutes(app);

app.listen(process.env.PORT, () => {
  Logging.info(`Server running at http://localhost:${process.env.PORT}`);
});
