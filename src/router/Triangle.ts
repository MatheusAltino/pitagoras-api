import { Router } from "express"
import { Triangle } from "../entity/Triangle"
import { TriangleController } from "../controller/TriangleController"
import { UserController } from "../controller/UserController"

export const routerTriangle = Router()
const triangleCtrl = new TriangleController()
const userCtrl = new UserController()

//Criando triangulos e descobrindo a hipotenusa
routerTriangle.post('/create', async(req, res) => {
    const { idUser, cateto1, cateto2 } = req.body
    const user = await userCtrl.getById(idUser)
    if (user) {
        const triangle = new Triangle(cateto1, cateto2, user)
        const addHip = triangle.hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
        const triangleSaved = await triangleCtrl.save(triangle)
        res.json(triangleSaved)
    }
    res.status(404).json({ message: 'Usuário não encontrado'})
})

//listar triangulos de um usuário
routerTriangle.get('/triangles/:idUser', async (req, res) => {
    const idUser = parseInt(req.params.idUser);
    const triangles = await userCtrl.getTriangleByUser(idUser)
    res.json(triangles)
})