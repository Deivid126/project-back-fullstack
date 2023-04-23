import express from 'express';
import  router  from './routes/routes';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.get("/", (req,res) => {
    res.send("Hello Wolrd")
});

app.listen(4000, ()=> {
    console.log("Servidor rodando na porta 4000")
});
