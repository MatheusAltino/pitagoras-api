import { Router } from "express";
import { UserController } from "../controller/UserController";
import { User } from "../entity/User";

export const routerUser = Router()

const userCtrl = new UserController()

//Salvar novos usuários
routerUser.post('/register', async (req, res) => {
    res.render('../../public/register.html')
    const {name, email} = req.body;
    const user = new User(name, email);
    const userSaved = await userCtrl.save(user);
    res.json(userSaved);
});

//Listar usuários
routerUser.get('/user/all', async (req, res) => {
    //incluir verificação de usuário
    const users = await userCtrl.getAll();
    res.json(users);
});