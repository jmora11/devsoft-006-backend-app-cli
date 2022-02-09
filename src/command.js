const { program } = require('commander');
const { prompt } = require('inquirer');
const { addTask, listTask } = require('./controllers/TaskController');

program.version('1.0.0')
    .description('A command line tool for managing tasks');

program.command('save')
    .action(async () => {

        const answers = await prompt([
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

        addTask(answers);
    });

program.command('list')
    .action(async () => await listTask());



program.parse(program.argv);