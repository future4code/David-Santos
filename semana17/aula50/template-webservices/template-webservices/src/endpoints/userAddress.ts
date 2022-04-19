import { Request, Response } from "express";
import { connection } from "../data/connection";
import { addressInfo } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { cep, street, number, complement, neighborhood, city, state} = req.body

      if (!cep || !street || !number || !neighborhood || !city || !state) {
         res.statusCode = 422
         throw "'CEP', 'Rua', 'Numero', 'Bairro', 'Cidade' e 'UF' são obrigatórios"
      }

      const newAddress: addressInfo = { id, name, nickname, email, address }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}