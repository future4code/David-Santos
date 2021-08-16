export type Account ={
    name: string,
    CPF:string,
    date:Date,
    saldo:number,
    balance: Array <transaction>
}

export type transaction = {
    valor:number,
    date:Date,
    description:string
}