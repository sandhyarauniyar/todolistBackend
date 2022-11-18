const db = require("../models");
const config = require("../config/dbConfig.js");
const tasklist = db.models.tasklist;

// for creating task
const addingTask = async (req, res) => {
    try {
        const task = await tasklist.create({
            id: req.body.id,
            task: req.body.task,
        });
        console.log("task created");
        console.log(task);
        res.json(task);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    };
}

// updating a task
const updateList = async (req, res) => {
    try {
        const task = await tasklist.update(
            { task: req.body.task },
            { where: { id: req.body.id } }
        );
        console.log("updated task");
        res.json(task);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    };
}

// deleting a task
const deleteList = async (req, res) => {
    console.log(req.params.id);
    try {
        const task = await tasklist.destroy({
            where: { "id": req.params.id }
        });
        console.log("task deleted");
        res.json(task);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    };
}

// showing all tasks
const showingList = async (req, res) => {
    console.log("inside listing all tasks");
    try {
        const task = await tasklist.findAll();
        res.json(task);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    };
}

module.exports = {
    showingList,
    addingTask,
    deleteList,
    updateList
}