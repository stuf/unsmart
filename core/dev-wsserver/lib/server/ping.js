import WebSocket from 'ws';
import * as K from 'kefir';
import log from 'npmlog';

log.heading = 'server/ping';
log.enableColor();

export default function ({ host, port, interval }) {
  log.info('', 'Starting WebSocket server on host %s, port %s', host, port);

  const server = new WebSocket.Server({ host, port });
  const tick = K.interval(interval, 1);
  const response = tick.scan((prev, next) => prev + next, 0);

  const sendPing = () => response.onValue(v => {
    if (server.clients.size) {
      log.http('', 'Ping client');
      server.clients.forEach(client => {
        client.send({ ping: +new Date(), tick: v });
      });
    }
  });

  sendPing();
}
