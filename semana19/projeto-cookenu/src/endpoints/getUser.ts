import { Request, Response } from "express";
import { User } from "../entities/User";
import { Authenticator } from "../services/Auhtenticator";
import { UserDatabase } from "../database/UserDatabase";

export async function getUser(
    req: Request, 
    res: Response
    ):Promise<void>  {

        try{
            const token:string = req.headers.authorization;

            if(!token){
                res
                    .status(422)
                    .send("Verifique sua autenticação")
            }
            
            const authenticator = new Authenticator();
            const tokenData = authenticator.getTokenData(token);

            const userDataBase = new UserDatabase()
            const user = await userDataBase.getUserbyId(tokenData.id)

            res.status(200).send(user);
        }catch(error){
            res.status(400).send(error.message);
        }
    
    
 }