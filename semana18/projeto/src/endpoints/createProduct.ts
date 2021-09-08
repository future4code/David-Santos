import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"
import { Product } from "../entities/entities"
import { CustomError } from "../errors/CustomError"

export default async function createProduct(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, description, price } = req.body
      const id = (Date.now() + Math.random().toString())


      if (!name || !description || !price) {

         throw new CustomError(406, "Dados incompletos: Verifique os Campos")
      }

      const product = new Product(
         name,
         description,
         price,
         id
      )

      const productDatabase = new ProductDatabase()
      await productDatabase.create(product)

      res.status(201).end()
   } catch (error: any) {
      res.status(error.statusCode || 400)
         .send(error.message || "Erro inesperado")
   }
}