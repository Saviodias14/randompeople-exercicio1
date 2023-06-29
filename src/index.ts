import express, { Request, Response, json } from "express";
import "express-async-errors";
import httpStatus from "http-status";
import randomRouter from "@/routes/random.routes";
import errorHandler from "@/middlewares/errors.middlewares";

const app = express()
app.use(json())
app.use(randomRouter)
app.get("/health", (req: Request, res: Response) => {
    return res.sendStatus(httpStatus.OK)
})
app.use(errorHandler)

const port = parseInt(process.env.PORT) || 5000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})