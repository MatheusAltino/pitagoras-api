import { getManager } from "typeorm"
import { routerTriangle } from "../router/Triangle"
import { Triangle } from "../entity/Triangle"

export class TriangleController {
        
    async save(triangle: Triangle) {
        const triangleSaved = await getManager().save(triangle);
        return triangleSaved;
    }
    
    //Listar todos
    
}

