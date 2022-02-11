const { program } = require('commander');
const { answers } = require('./controllers/TaksPrompt');

const { addTask, listTask, removeTask, updateTask, findByWord } = require('./controllers/TaskController');

program
    .version('1.0.0')
    .description('A command line tool for managing tasks');

program
    .command('save')
    .alias('s')
    .action(async () => await addTask(await answers()));

program
    .command('list')
    .alias('l')
    .action(async () => await listTask());

program
    .command('delete <id>')
    .alias('d')
    .action(async (id) => await removeTask(id));

program
    .command('update <id>')
    .alias('u')
    .action(async (id) => await updateTask(id, await answers()));

program
    .command('find <word>')
    .alias('f')
    .action(async (word) => await findByWord(word));

program
    .parse(program.argv);