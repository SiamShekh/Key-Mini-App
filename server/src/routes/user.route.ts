import { Router } from "express";
import user from "../module/user.services";

const UserRoute = Router();
UserRoute.post("/login", user.create_user)

export default UserRoute;