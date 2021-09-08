import { Request, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { User } from "../entities/entities"
import { CustomError } from "../errors/CustomError"

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, email, age } = req.body
      const id = (Date.now() + Math.random().toString())


      if (!name || !email || !age) {

         throw new CustomError(406, "Dados incompletos: Verifique os Campos")
      }

      const user = new User(
         name,
         email,
         age,
         id
      )

      const userDatabase = new UserDatabase()
      await userDatabase.create(user)

      res.status(201).end()
   } catch (error: any) {
      res.status(error.statusCode || 400)
         .send(error.message || "Erro inesperado")
   }
}