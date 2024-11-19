import { Request, Response, NextFunction } from "express";

export const loggingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(
    `IP: ${req.ip} | ${req.method} to ${req.url} received at ${new Date()} -- Responded with ${res.statusCode}`,
  );
  next();
};
