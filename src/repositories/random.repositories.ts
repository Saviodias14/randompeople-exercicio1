import { connection } from "@/database/database";
import { people } from "@/protocols/index.protocols";

export async function getRandomPeople() {
    const result = await connection.query<people[]>(`SELECT * FROM people`)
    return result.rows   
}