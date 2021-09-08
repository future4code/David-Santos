
export class User {
    private name: string
    private email: string
    private age: number
    private id: string

    constructor(
        UserName: string,
        UserEmail: string,
        UserAge: number,
        UserID: string
    ){
        this.name =UserName
        this.email = UserEmail
        this.age = UserAge
        this.id = UserID
    }
}

export class Product {
    private name: string
    private description: string
    private price: number
    private id: string

    constructor(
        ProductName: string,
        ProductDescription: string,
        ProductPrice: number,
        ProductID: string
    ){
        this.name =ProductName
        this.description = ProductDescription
        this.price = ProductPrice
        this.id = ProductID
    }
}
