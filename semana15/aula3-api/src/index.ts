import express from "express";
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

type country ={
    id: number,
    name: string,
}

let countries: country[] = [
    {
		"id":0,
		"name":"África do Sul"
	},
    {
		"id":1,
		"name":"Angola"
	}
]


app.get("/countries", (req, res) => {
    res.send(countries)
})

app.get("/countries/:id", (req, res) => {
    const result = countries.find((country) => {
        return country.id === Number(req.params.id)
    }
    )
    if(result === undefined){
        res.status(404).send("País não encontrado")
    } else {
        res.send(result)
    }
})

app.listen(3003, () => {
    console.log("Server is running")
});