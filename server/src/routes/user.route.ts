import { Router } from "express";
import user from "../module/user.services";
import { UserVaildation } from "../utils/Middleware";

const UserRoute = Router();
UserRoute.post("/login", user.create_user);
UserRoute.get("/me",UserVaildation, user.getUser);


export default UserRoute;