const express = require('express');
const server = express();
const PORT = 3000;
const pg = require('pg');
pg.connect('postgres://apl_log_books_admin:superfly@localhost:5432/apl_log_books');
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));