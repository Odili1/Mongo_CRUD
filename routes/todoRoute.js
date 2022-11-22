const router = require('express').Router();
const controller = require('../controllers/todoController');


const todoRouter = router
.post("/", controller.addTodo)
.put("/:id", controller.updateTodo)
.delete("/:id", controller.deleteTodo)
.get("/", controller.getTodo)

module.exports = todoRouter;