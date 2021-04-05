const { Pool } = require('pg');
// const config = require('../config');
const config = require('config');
// const pool = new Pool(config.db);


// const pool = new Pool(config.get('db'));
// const connectionString = 'postgres://igypljvw:DggsF6kvE8C7bfl-JmSH8nyDj8mIDvop@hattie.db.elephantsql.com:5432/igypljvw';
// const pool = new Pool({ connectionString });
// console.log("connectionString=", config.get('connectionString'));
// console.log("typeof connectionString=", typeof (config.get('connectionString')));
const connectionString = config.get('connectionString');
const pool = new Pool({ connectionString });

/**
 * Query the database using the pool
 * @param {*} query 
 * @param {*} params 
 * 
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
  const { rows, fields } = await pool.query(query, params);

  return rows
}

module.exports = { query };
