import { errors } from "@/protocols/index.protocols";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(err: errors, req: Request, res: Response, next: NextFunction) {
    console.log(err);

    if (err.type === "NotFound") {
        return res.status(httpStatus.CONFLICT).send(err.message);
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}