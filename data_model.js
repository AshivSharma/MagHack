const Pool = require('pg').Pool
const pool = new Pool({
    user: 'team_fourteen',
    host: '34.86.100.123',
    database: 'postgres',
    password: 'Magteam14',
    port: 5432,
});

const getQuestions = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public.questions', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  
  
  module.exports = {
    getQuestions
  }