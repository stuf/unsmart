module.exports = exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          browser: true,
          node: true,
        },
        debug: true,
        modules: 'umd',
      },
    ],
  ],
};
