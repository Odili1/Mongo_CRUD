const todo = require("../models/todoModel");

// Add Todo Task
exports.addTodo = async(req, res) => {
    try {
        let getTodo = await req.body;
        let newTodo = await todo.create(getTodo);

        if (!newTodo) return res.status(400).json({message: 'Todo task not Added'});

        return res.status(200).json({
            successful: true,
            message: 'Todo task added succesfully',
            todo: newTodo
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        })
    }
};


// Update Todo Task
exports.updateTodo = async(req, res) => {
    try {
        let id = {_id: req.params.id};
        let newTodo = await req.body;
        let updated = await todo.findOneAndUpdate(id, newTodo, {new: true})

        if (!updated){
            return res.status(400).json({message: "Todo task not updated"})
        }

        return res.status(200).json({
            success: true,
            message: "Todo task successfully updated",
            Todo: updated
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}


// Delete Todo Task
exports.deleteTodo = async(req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await todo.findByIdAndRemove(id);

        if (!deleted){
            return res.status(400).json({message: "Todo Task Deleted"})
        }

        return res.status(200).json({
            success: true,
            message: "Todo Task Successfully Deleted",
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        })
    }
}



// Retrieve All Todo Tasks
exports.getTodo = async(req, res) =>{
    try {
        let todos = await todo.find();

        if (!todos) return res.status(400).json({message: "No Todo task found"});

        return res.status(200).json({
            success: true,
            message: "Todo Tasks found",
            todos,
            count: todos.length
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        })
    }
}