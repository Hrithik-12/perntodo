const pool = require("../db");

const Deletetodo=async (req,res)=>{
  const {todoid}=req.params;

  const deletedTOdo=await pool.query("DELETE FROM todos WHERE todoid=$1 ",[todoid]);

  res.json("To DO Deleted !!");
  

}

module.exports=Deletetodo;