import {User} from "../entities/entities";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

    private TABLE_NAME = "Semana18_User"

    async create(user: User) {
      await BaseDatabase.connection(this.TABLE_NAME)
           .insert(user)
    }
}