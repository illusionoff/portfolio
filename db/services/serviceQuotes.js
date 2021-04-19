const db = require('../db');

async function getMultiple(name, message) {
  console.log("serviceQuotes name: ", name);
  console.log("serviceQuotes message: ", message);
  // const data = await db.query(
  //   `INSERT INTO portfolioMessage (
  //     name,
  //     message,
  //     time
  //   ) VALUES('Иванов', 'my message Иванов', NOW());`
  // );

  let data = await db.query(
    `INSERT INTO portfolioMessage (
        name,
        message,
        time
      ) VALUES('${name}', '${message}', NOW());`
  );

  console.log('data db.query serviseQuotes:', data);

  // const data = await db.query(
  //   'SELECT firstname, lastname, country from testPortfolio WHERE message_id = 1 ;'
  // );

  data = { name, message };
  // console.log('typeof data my serviseQuotes:', typeof data);
  console.log('data serviseQuotes:', data);
  return data

  // console.log("serviceQuotes e:", e);
  // res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });


}

module.exports = { getMultiple };
