require('yargs')
  .usage('Usage: $0 [options]')
  .options({
    'verbose': {
      alias: 'v',
      type: 'boolean',
    },
    'use-unbuilt': {
      type: 'boolean',
      describe: 'Use runtime code transformation on library instead of using pre-built code',
    },
  })
  .commandDir('./command', { exclude: /^_.*/ })
  .demandCommand()
  .argv
;
