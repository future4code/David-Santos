import app from "./app";
import createProduct from "./endpoints/createProduct";
import createUser from "./endpoints/createUser"

app.post("/Cadastro/Usuario", createUser)

app.post("/Cadastro/Produto", createProduct)