

// const Pool=require('pg').Pool;
// const pool=new Pool({
//   user:"postgress",
//   password:"postgress1",
//   host:"localhost",
//   port:5432,
//   database:"perntodo"

// });
const Pool = require('pg-pool');

const pool = new Pool({
  user: 'postgres',
  password: 'postgress1',
  host: 'localhost',
  database: 'perntodo',
  port: 5432,
});

// pool.query('SELECT * FROM your_table')
//   .then(result => {
//     console.log(result.rows);
//   })
//   .catch(err => {
//     console.error(err);
//   });



module.exports=pool;
