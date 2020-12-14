var events = require('events');
var eventEmitter = new events.EventEmitter();

//cria a funcao listener1
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

//cria a funcao listener2
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

//Adiciona um evento de conecção com a funçao listener1 
eventEmitter.addListener('connection', listener1);

//conecção com a funçao listene2
eventEmitter.on('connection', listener2);

// Cria a variavel eventListeners solicitando o require('events')
var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//Evento de conexão
eventEmitter.emit('connection');

//desliga a coneccao da listener1
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

//Evento de conexão 
eventEmitter.emit('connection');

//chama o eventlisteners solicitando o events para mostrar quem ta conectado 
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//fim do programa
console.log("Program Ended.");
