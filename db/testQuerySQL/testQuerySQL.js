const queryCreate = `CREATE TABLE players (
  player_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  birthdate DATE,
  country VARCHAR(50)
); `;

const queryCreate2 = `CREATE TABLE testPortfolio (
  player_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  birthdate DATE,
  country VARCHAR(50)
); `;

const queryInsert = `INSERT INTO testPortfolio (
  firstname,
  lastname,
  country
) VALUES('Siniakou', 'Alex', 'Belarus'); `;

const querySelect = `SELECT firstname, lastname, country from testPortfolio ; `;

const queryCreate2 = `CREATE TABLE portfolioMessage (
  message_id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  message VARCHAR (1000),
  time timestamp with time zone
); `;

const queryDeleteTable = `DROP TABLE portfolioMessage`;

const queryInsert = `INSERT INTO portfolioMessage (
  name,
  message,
  time
) VALUES('Siniakou', 'my message', NOW()); `;

const querySelect = `SELECT name, message, time from portfolioMessage ; `;

const queryInsert = `INSERT INTO portfolioMessage (
  name,
  message,
  time
) VALUES('Иванов', 'my message Иванов', NOW()); `;

const querySelect = `SELECT  message_id, name, message, time from portfolioMessage WHERE message_id =1; `;