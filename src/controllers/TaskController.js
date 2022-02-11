const Task = require('../models/Task');
const { connection } = require('../db');

const addTask = async (task) => {
    await Task.create(task);
    console.log('New Task Created!');
    await connection.close();
};

const listTask = async () => {

    let tasks = await Task.find().lean();
    tasks = tasks.map(task => (
        {
            id: task._id.toString(),
            title: task.title,
            description: task.description,
            dayToResolve: task.dayToResolve
        }
    ));
    
    console.table(tasks);
    await connection.close();
    process.exit(0);
};

const removeTask = async (id) => {
    await Task.findByIdAndDelete(id);
    console.log('Task Deleted!');
    await connection.close();
};

const updateTask = async (id, newTask) => {
    await Task.updateOne({_id: id}, newTask);
    console.log('Task updated!');
    await connection.close();
};

const findByWord = async (word) => {
    const serach = new RegExp(word, 'i');
    const tasks = await Task.find({
        $or: [
            {title: serach},
            {description: serach}
        ]
    });

    if(tasks.length === 0) {
       console.log('No tasks found');
       await connection.close();
       process.exit(0);
    }

    const tasksMap = tasks.map(task => (
        {
            id: task._id.toString(),
            title: task.title,
            description: task.description,
            dayToResolve: task.dayToResolve
        }
    ));

    console.table(tasksMap);
    await connection.close();
    process.exit(0);
};

module.exports = {
    addTask,
    listTask,
    updateTask,
    removeTask,
    findByWord
};
