import {Ice} from 'ice';

const p = new Ice.Promise<number>();
p.resolve(42);
p.reject(new Error());
p.finally(() => {}).catch(err => {});
p.finally(() => Promise.resolve()).catch(err => {});
p.delay(100).catch(err => {});

Ice.Promise.delay(100).then(() => {});
Ice.Promise.delay(100, 'lol').then(str => {});

Ice.Promise.try(() => 'lol').then(str => {});
Ice.Promise.try(() => Promise.resolve('lol')).then(str => {});
