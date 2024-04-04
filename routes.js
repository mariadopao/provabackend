import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()

routes.get('/', async (req, res) => {
  try {
    const { recordset } =  await pool.query`SELECT * from tabela_de_agendamentos`
    return res.status(200).json(recordset)
  } 
  catch (error) {
    return res.status(501).json('Erro interno do servidor' );
  }
});

routes.post('/agendamento/novo', async (req, res) => {
  try {
    const { nome_do_espaco, data, hora, motivo_da_reserva } = req.body;
    await pool.query`insert into tabela_de_agendamentos values (${nome_do_espaco}, ${data}, ${hora}, ${motivo_da_reserva})`;
    return res.status(201).json('Agendamento criado com sucesso')
  } 
  catch (error){
    res.status(501).json( 'Erro interno do servidor' );
  }
});

routes.delete('/agendamento/excluir/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query`delete from tabela_de_agendamentos where id = ${id}`;
    return res.status(200).json('Agendamento excluído!');
  } 
  catch (error) {
    console.error(error);
    return res.status(501).json( 'erro ao excluir o agendamento' );
  }
});

export default routes

