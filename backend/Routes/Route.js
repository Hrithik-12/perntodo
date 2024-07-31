// we define all the routes here 
const express=require('express');
const router=express.Router();
const create=require('../logiccontroller/creatlogic.js');
const getTodo=require('../logiccontroller/getalltodo.js');
const getspecifictodo=require('../logiccontroller/getaSpecifictodo.js');
const updateTodo=require('../logiccontroller/Updatetodo.js');
const deleteTodo=require('../logiccontroller/DeleteTodod.js');

router.post('/create/todo',create);
router.get('/getall/todos',getTodo);
router.get('/get/specific/:todoid',getspecifictodo);
router.put('/update/todo/:todoid',updateTodo);
router.delete('/delete/todo/:todoid',deleteTodo)

module.exports=router