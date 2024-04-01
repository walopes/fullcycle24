const express = require('express')
const app = express()
const port = 5000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config);
// connection.beginTransaction()
// const createDb = `CREATE TABLE People(Id int autoincrement, )`;
// connection.query(createDb);

const sql = `SELECT Name FROM People limit 1`;
var name = '';
connection.query(sql, function(err, result, fields){
    if(err) throw err;
    name = result[0].Name;
});
connection.end();

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle: ${name}</h1>`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});