const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app=  express();
app.use(express.json());
app.use (cors());

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "basic_crud"
})

db.connect(err => {
    if (err) {
        console.error('error connecting to the database:', err.stack);
        return;
    }
    console.log('connected to the database');
});

app.get("/", (req, res)=>{
    // res.json("hello from backend");
    const sql = "SELECT * FROM student ";
    db.query(sql, (err, data)=>{
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.post("/create", (req,res)=>{
    const sql= "INSERT INTO student ('Name','Email') VALUES (?)";
    const values =[
        req.body.name,
        req.body.email,
    ]
    db.query(sql, [values], (err, data ) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

// app.put("/update/:id", (req,res)=>{
//     const sql= "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";
//     const values =[
//         req.body.name,
//         req.body.email,
//     ]
//     const id =req.params.id;

//     db.query(sql, [...values,id], (err, data ) => {
//         if (err) return res.json("Error");
//         return res.json(data);
//     });
// });

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET Name = ?, Email = ? WHERE ID = ?";
    const values = [
      req.body.name,
      req.body.email,
    ];
    const id = req.params.id;
  
    console.log("Updating student with ID:", id);
    console.log("New values:", values);
  
    db.query(sql, [...values, id], (err, data) => {
      if (err) {
        console.log("Error updating student:", err);
        return res.json("Error");
      }
      console.log("Update result:", data);
      return res.json(data);
    });
  });

app.listen(8081, () => {
    console.log("listening");
})

app.delete("/DeleteStudent/:id", (req,res)=>{
    const sql= "DELETE FROM student WHERE ID=? ";
    const id =req.params.id;

    db.query(sql, [id], (err, data ) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});