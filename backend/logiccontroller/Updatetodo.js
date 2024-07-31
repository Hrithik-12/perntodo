const pool = require("../db");

const updatetodo=async (req,res)=>{
  const {todoid}=req.params;
  const {descriptions}=req.body;
 

  const updatedTodo= pool.query("UPDATE todos SET descriptions=$1 WHERE todoid=$2 ",[descriptions,todoid]);

  res.json('To Do was Updated!!');

}

module.exports=updatetodo;