import {Product} from "../entities/entities";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{

    private TABLE_NAME = "Semana18_Product"

    async create(product: Product) {
      await BaseDatabase.connection(this.TABLE_NAME)
           .insert(product)
    }
}