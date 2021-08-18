// 1) A: Retorna os dados pedidos e informações sobre o banco que devem ser removidas da resposta
//1) B
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}
//1) C
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
} 

//2) A

    const updateActor = async(id:string, salary: number): Promise<any> => {
        await connection("Actor")
            .update({
                salary: salary,
            })
            .where("id",id);
    }

//2) B

    const deleteActor = async (id: string): Promise<any> => {
        await connection("Actor")
            .delete()
            .where("id", id);
    }

//2) C

    const avgSalary = async (gender: string): Promise<any> => {
        const result = await connection("Actor")
          .avg("salary as average")
          .where({ gender });
      
        return result[0].average;
      };

//3) A
app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  //3) B
  app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });