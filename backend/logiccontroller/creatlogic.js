const pool=require('../db');
const createTodo=async (req,res)=>{
  try{
    const {descriptions}=req.body;
    const newTodo=await pool.query('INSERT INTO todos (Descriptions) VALUES ($1) RETURNING * ',[descriptions]);
   
    res.json(newTodo.rows[0]);
  


  }catch(error){
    console.log(error)
  }
  

}

module.exports=createTodo;