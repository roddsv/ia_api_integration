require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor'});
});

const PORT = process.env.port || 3000;

app.listen(PORT, ()=> console.log(`API rodando na porta ${PORT}`));