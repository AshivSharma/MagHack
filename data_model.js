const Pool = require('pg').Pool
const pool = new Pool({
    user: 'team_fourteen',
    host: '34.86.100.123',
    database: 'postgres',
    password: 'Magteam14',
    port: 5432,
});
const accountSid = 'ACd8ebb46f834273c8281b78b1e5faa315';
const authToken = '1052c87d02ff563467b3a167f705396c';
const client = require('twilio')(accountSid, authToken);


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