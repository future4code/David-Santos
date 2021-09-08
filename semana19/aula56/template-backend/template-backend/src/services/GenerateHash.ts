import bcrypt from 'bcryptjs';

export class GenerateHash {
    hash = (plainText: string) => {
        const rounds = Number(process.env.BCRYPT_ROUNDS)//Se origina do env
        const salt = bcrypt.genSaltSync(rounds)//Gera uma string(salt baseada no cost(rounds))
        const result = bcrypt.hashSync(plainText, salt)
        return result
    }

    compare = (plainText: string, passwordDatabase: string) => {
        const result =  bcrypt.compareSync(plainText, passwordDatabase)
        return result
    }
}   
