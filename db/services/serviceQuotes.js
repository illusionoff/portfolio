const db = require('../db');

async function getMultiple() {
  // const data = await db.query(
  //   `INSERT INTO portfolioMessage (
  //     name,
  //     message,
  //     time
  //   ) VALUES('Иванов', 'my message Иванов', NOW());`
  // );

  const data = await db.query(
    ' SELECT  message_id, name, message, time from portfolioMessage WHERE message_id =1; '
  );
  // const data = await db.query(
  //   'SELECT firstname, lastname, country from testPortfolio WHERE message_id = 1 ;'
  // );
  return data
}

module.exports = { getMultiple };
