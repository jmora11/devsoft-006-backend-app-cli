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
}

module.exports = {
    addTask,
    listTask
};
