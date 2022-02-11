#!/usr/bin/env-node
require('./command');
const { connectBD } = require('./db');

async function main() {
    await connectBD();
};

main();
