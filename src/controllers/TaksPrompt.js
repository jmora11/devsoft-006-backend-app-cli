const { prompt } = require('inquirer');

const answers = async () => {
    return await prompt([
        {
            type: 'input',
            message: 'Task Title',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Task Description',
            name: 'description'
        },
        {
            type: 'rawlist',
            message: 'Day to resolve this task',
            name: 'dayToResolve',
            choices: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ]
        }
    ]);
} 

module.exports = { answers }
