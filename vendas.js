const consulta = `
    SELECT TOP 1 
        TB02021_CODIGO AS NOTA,
        TB02021_CODCLI AS CODCLIENTE
    FROM TB02021
    `;

export { consulta };
