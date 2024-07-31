const pool=require('../db');
const GetallTodo=async (req,res)=>{
  try{
    const gettodo=await pool.query('SELECT * FROM todos');

  res.json(gettodo.rows);
  }catch(error){
    console.log(error);
  }


}
module.exports=GetallTodo;