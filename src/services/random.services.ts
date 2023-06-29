import { errors } from "@/protocols/index.protocols"
import * as randomRepository from "@/repositories/random.repositories"

export async function getRandomPeople(){
    const result = await randomRepository.getRandomPeople()
    if (!result){
        throw NotFound()
    }
    const randomNumber = Math.floor(Math.random()* (result.length))
    return result[randomNumber]
}

export function NotFound(){
    const errors : errors = {
        type: "NotFound",
        message: "Result not found"
    }
}