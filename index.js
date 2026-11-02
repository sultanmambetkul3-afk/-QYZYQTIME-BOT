const bedrock = require('bedrock-protocol');

const CONFIG = {
    host: 'qyzyqtimesmp.halix.sh',
    port: 19132,
    username: 'QYZYQTIME_BOT',
    offline: true
};

function connectBot() {
    console.log('Серверге қосылуда...');

    let client;

    try {
        client = bedrock.createClient(CONFIG);

        client.on('join', () => {
            console.log('QYZYQTIME_BOT серверге кірді!');
        });

        client.on('spawn', () => {
            console.log('Бот ойын әлемінде!');
        });

        client.on('error', (err) => {
            console.log('Қате:', err.message);
        });

        client.on('close', () => {
            console.log('Байланыс үзілді. 15 секундтан кейін қайта қосылады.');
            setTimeout(connectBot, 15000);
        });

    } catch (error) {
        console.log(error.message);
        setTimeout(connectBot, 15000);
    }
}

connectBot();
