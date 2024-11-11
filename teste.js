import { connectDb } from './connectionSQL.js';
import { consulta } from './vendas.js';

export async function executeQuery() {
  try {
    const pool = await connectDb();
    

    // Executar consulta SQL
    const result = await pool.request().query(consulta);
    console.log('Resultado da consulta:', result.recordset);

    // Fechar a conexão
    await pool.close();
  } catch (err) {
    console.error('Erro ao executar consulta:', err);
  }
}

// Executar a função de consulta
executeQuery();
