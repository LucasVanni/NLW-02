import express from 'express';

import cors from 'cors';

import routes from './routes';

// Tudo parte daqui...
const app = express();

app.use(cors);

app.use(express.json());

// Rota => http:localhost:3333/users
// Recurso => Tudo após do /, /users por exemplo

/*
Métodos
    Get: Buscar ou listar uma informação;
    Post: Criar alguma nova informação;
    Put: Atualizar uma informação;
    DELETE: Deletar uma informação;
*/

/*
    Corpo (Request Body): Dados para a criação ou atualização de um registro.
    Route Params: Utilizado para identificar qual recurso eu quero atualizar ou deletar.( sufixo : )
    Query Params: Paginação, filtros, ordenação.
*/
app.get('/', (req, res) => {
    return res.json({message: 'Hello Next Level Week 2'})
});

app.use(routes);

// Fica escutando um endereço http...
app.listen(3333);
