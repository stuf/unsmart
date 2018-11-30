// @ts-check
import WebSocket from 'ws';
import * as K from 'kefir';

const wss = new WebSocket.Server({ port: +process.env.PORT || 6420 });

K.interval(1000, 1)
 .scan((prev, next) => prev + next, 0)
 .onValue(v => {
   console.log('ping', v);
   wss.clients.forEach(client => client.send({ ping: true, value: v }));
 });

K.fromEvents(wss, 'connection')
 .onValue(() => {
   console.log('client connected');
 });
