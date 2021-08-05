const ws = require('ws').Server;

const wss = new ws({port: 8080});

wss.on('connection',ws => {
    console.log('in');
    ws.on('message', mes => {
        console.log(mes);
    })
});