var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
    token: 'MzAxMjYyNzQ2OTMzMDAyMjUy.C84cYg.GCSiBi9KZTypZR13MZtNuwBW_3U'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    console.log('Salut tu est en debut de fonction');
    if(e.message.content == 'PING'){
	console.log('Tu est dans le if');
        e.message.channel.sendMessage('PONG');
    }
});
