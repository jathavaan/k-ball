import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../common";

export const errorHandlingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    try {
      next();
    } catch (err: any) {
      throw err;
    }
  } catch (err: any) {
    console.log(err.message);
    if (err instanceof ValidationError) {
      res.status(400).json({ message: err.message });
    } else {
      console.error(`Error: ${err.message}`);
      res.status(500).json("Internal server error");
    }
  }
};
