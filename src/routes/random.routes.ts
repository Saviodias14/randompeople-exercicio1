import { getRandomPeople } from "@/controllers/random.controllers";
import { Router } from "express";

const randomRouter = Router()

randomRouter.get("/people", getRandomPeople)

export default randomRouter;