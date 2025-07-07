import { Router } from "express";
import UserRoute from "./user.route";

const MainRoute = Router();
MainRoute.use("/user", UserRoute);

export default MainRoute;