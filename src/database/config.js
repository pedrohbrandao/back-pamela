module.exports = {
   development: {
      dialect: 'mysql',
      host: 'database-1.cfvt67mmq1qj.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'pameladeco',
      database: 'pamela',
   },
   test: {
      dialect: 'mysql',
      host: 'database-1.cfvt67mmq1qj.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'pameladeco',
      database: 'pamela',
   },
   production: {
      dialect: 'mysql',
      host: 'database-1.cfvt67mmq1qj.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'pameladeco',
      database: 'prod',
   },
}