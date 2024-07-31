const pool = require("../db");

const updatetodo=async (req,res)=>{
  const {todoid}=req.params;
  const {descriptions}=req.body;
 

  const updatedTodo=await pool.query("UPDATE todos SET descriptions=$1 WHERE todoid=$2 ",[descriptions,todoid]);
  // const gethatupdatedtodo=await pool.query('SELECT * FROM todos where todoid=$3 ',[todoid])
  res.json({msg:"To do updated"});

}

module.exports=updatetodo;