

import render from './Website/mod.js'


const { clear , log } = console;

clear();

log(`Starting website building process..`);


await render();


log(`Done.`)
