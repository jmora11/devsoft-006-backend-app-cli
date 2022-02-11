// #!/usr/bin/env-node does'nt works
require('./command');
const { connectBD } = require('./db');

async function main() {
    await connectBD();
};

main();
