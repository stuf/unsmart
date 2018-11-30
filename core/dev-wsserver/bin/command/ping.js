module.exports.command = 'ping [options]';

module.exports.describe = 'Create a pinging WebSocket server';

module.exports.builder = yargs => yargs
  .options({
    'interval': {
      alias: 'i',
      type: 'number',
      default: 1000,
      describe: 'Ping interval',
    },
    'port': {
      alias: 'p',
      type: 'number',
      default: 6420,
    },
    'host': {
      alias: 'h',
      type: 'string',
      default: 'localhost',
    },
  });

module.exports.handler = argv => {
  const path = require('path');
  const fs = require('fs');

  const scriptDir = path.dirname(__dirname);
  const distPath = path.resolve(scriptDir, '..', 'dist');
  const [scriptName] = argv._;
  const serverScriptPath = path.join(distPath, 'server', `${scriptName}.js`);

  const { host, port, interval, useUnbuilt } = argv;
  const opts = { host, port, interval };

  if (
    useUnbuilt ||
    !(fs.statSync(distPath).isDirectory() && fs.statSync(serverScriptPath).isFile())
  ) {
    require('../../dist/server/ping')(opts);
  }
  else {
    require(serverScriptPath).default(opts);
  }
};
