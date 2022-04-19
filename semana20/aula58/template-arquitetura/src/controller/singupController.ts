import { Request, Response } from "express";
import { signupBusiness } from "../business/singupBusiness"

export const signupController = async(
    req: Request,
    res: Response
) => {
    try {
        const { name, email, password, role } = req.body

        // Chama o business e pega o valor de token
        const token = await signupBusiness({ name, email, password, role })

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })

    } catch (error) {
        res.status(400).send(error.message)
    }
}