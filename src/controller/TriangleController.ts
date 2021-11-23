import { getManager } from "typeorm"
import { routerTriangle } from "../router/Triangle"
import { Triangle } from "../entity/Triangle"

export class TriangleController {
        
    async save(triangle: Triangle) {
        const triangleSaved = await getManager().save(triangle);
        return triangleSaved;
    }
    /*async getHip(triangle: Triangle) {
        const hipotenusa = triangle.hipotenusa = Math.sqrt(Math.pow(triangle.cateto1, 2) + Math.pow(triangle.cateto2, 2))
        return hipotenusa
    }*/   
}

