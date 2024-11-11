import sql from 'mssql';

const config = {
    user: 'XXXXX',
    password: 'XXXXX',
    server: 'localhost',
    database: 'XXXXX',
    options: {
        encrypt: true,
        trustServerCertificate: true 
  }
};

export async function connectDb() {
    try {
        // Conectar ao banco de dados
        const pool = await sql.connect(config);
        return pool;
    } catch (err) {
        throw err;
    }
}

connectDb();