import { app } from "./app"
import { signupController } from "./controller/singupController"
import { login } from './endpoints/login'

app.post('/user/signup', signupController)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

