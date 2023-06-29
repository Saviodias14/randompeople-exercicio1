import { Request, Response } from "express";
import httpStatus from "http-status";
import * as randomService from "@/services/random.services"

export async function getRandomPeople(req: Request, res: Response){
    const result = await randomService.getRandomPeople()
    res.status(httpStatus.OK).send(result)
}