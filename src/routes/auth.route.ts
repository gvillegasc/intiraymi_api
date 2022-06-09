import { Router } from "express";
import { loginByTicket, logoutByTicket } from "../controllers/auth.controller";

const router = Router();

router.post("/login-by-ticket", loginByTicket);
router.post("/logout-by-ticket", logoutByTicket);

export default router;
