import { Request, Response } from "express";

export const loginByTicket = async (req: Request, res: Response) => {
  try {
    const serialKey = req.body.serialKey;
    if (serialKey == "VzHHAiclqA9aVUzQ") {
      return res.status(201).json({
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjkxNjIzOTk5MH0.jfELu7uu1Lkr2r8ql3j_Yp3zSo6cqYYorvA2EcRGn7g",
      });
    }
    return res.status(400).json({ error: "Invalid ticket!" });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

export const logoutByTicket = async (req: Request, res: Response) => {
  try {
    return res.status(201).json({ status: "ok" });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
