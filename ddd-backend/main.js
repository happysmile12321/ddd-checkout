const express = require("express")
const { connection } = require('./db-conn')



// connection.execute("drop table if exists b")
// connection.execute("create Table b ( id INT )")
// connection.execute("insert into b (id) values (1),(2),(3)")

//武道者
connection.execute("drop table if exists wudaozhe")
connection.execute(`
create table wudaozhe(
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(20)
);
`)
connection.execute("insert into wudaozhe (name) values ('wukong'),('bajie')")


const app = express()
const prefix = "/api/v1"

function objectIsNull(obs) {
    return Object.keys(obs).length == 0 || obs.id == null
}

const okPrefix = {
    data: null,
}

app.get(prefix + "/wudaozhe/:id?", (req, res) => {
    if (objectIsNull(req.params)) {
        //查询全部
        connection.execute("select * from wudaozhe", (err, sqlres) => {
            res.send({
                ...okPrefix,
                data: sqlres
            })
        })
    } else {
        //查询id
        const id = req.params.id;
        connection.execute(`select * from wudaozhe where id = ${id}`, (err, sqlres) => {
            res.send({
                ...okPrefix,
                data: sqlres
            })
        })
    }
})


app.listen(12000, "0.0.0.0", () => console.log(`server start at : 120000`))