import express,{ Express } from "express";
import cors from 'cors'
import { account } from "./account";
import { Account } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";

app.post("/users", (req, res) => {
    let errorCode:number = 400
    try{
        const {id, name, CPF, date} = req.body
        
        if(!id || !name || !CPF || !date){
            errorCode = 422
            throw new Error("Confira os campos")
        }

        account.push({
            name,
            CPF,
            date,
            saldo:0,
            balance:[]
        })

        res.status(201).send({message: "Usuario criado"})
    }catch(error){
        res.status(errorCode).send({messagem: error.message})
    }
})

app.get("users/:CPF", (req, res) => {
    let errorCode:number = 400
    let saldocorrente

    const CPF = req.params.CPF 
    
    try{
        const CPF: number = Number(req.params.CPF);
        if (isNaN(CPF) || !CPF) {
            throw new Error("Confira o CPF");
          }
        account.map((valor)=>{
            saldocorrente =  valor.saldo
            return saldocorrente
        })
        res.status(200).send({message: `Saldo atual: ${saldocorrente}`})
    } catch(error){
        res.status(errorCode).send({messagem: error.message})
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});





