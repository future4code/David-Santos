import app from "./app";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { getUser } from "./endpoints/getUser";

app.post("/login", login)
app.post("/signup", signup)
app.get("/user", getUser)

