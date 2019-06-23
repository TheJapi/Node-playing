const mysql = require('mysql');

const con = mysql.createConnection({//establece la conexión con la db, recibe un objeto con host, user y pw
    host: 'localhost', //toma el 3306 por defecto
    user: 'root',
    password: 'admin',
    database: 'movies'
}); 

const insertMulti = () => {
    con.connect((err) =>{
        if (err) {
            throw err;
        }
        const sql = 'insert into movie_data (title, director, `year`, rating) values ?';
        const values = [
            ['Pollitos en fuga', 'Pollo', 2004, 8.3],
            ['Crespusculo', 'asdasd', 2008, 8.8],
            ['Unglorious basterds', 'Quentin Tarantino', 2004, 9.5]
            
        ];
    
        con.query(sql, [values], (err, result) => { //para insertar múltiples valores
            if (err){
                throw err;
            }
            console.log(result.affectedRows);
        });
        console.log('Connection succeded');
    });
};

const insertOne = () => {
    con.connect((err, result) => {
        const value = "('My little pony', 'Disney', 2014, 10)";
        const sql = 'insert into   '
    });
};


const consultAll = () => {
    con.connect((err, result) => {
        const sql = 'select * from movie_data';
        con.query(sql, (err, result, fields) => {
            if (err){
                throw err;
            }
            console.log(result);
        });
    });
} 


const consultSome = () => {
    con.connect(err, result => {
        var name = 'Amy';
        var adr = 'Mountain 21';
        var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
        con.query(sql, [name, adr], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }) ;
}
    


consultAll();


/* Result object obtained from a query

{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}

*/
