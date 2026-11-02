const config = require('./config');
const bedrock = require('bedrock-protocol');

let client;
let reconnectTimer;

function connect() {
    console.log('QYZYQTIME_BOT іске қосылуда...');

    client = bedrock.createClient({
        host: config.server.host,
        port: config.server.port,
        username: config.bot.username,
        offline: true
    });

    client.on('join', () => {
        console.log('Серверге қосылды!');
    });

    client.on('spawn', () => {
        console.log('Бот ойын әлемінде!');
    });

    client.on('close', () => {
        console.log('Байланыс үзілді!');
        clearTimeout(reconnectTimer);

        reconnectTimer = setTimeout(
            connect,
            config.bot.reconnectDelay
        );
    });

    client.on('error', error => {
        console.log('Қате:', error.message);
    });
}

connect();
