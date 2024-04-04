export const sqlConfig = {
    server: '192.168.1.83',
    port: 1433,
    user: 'sa',
    password: '12345678',
    database: 'prova',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 5000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
}