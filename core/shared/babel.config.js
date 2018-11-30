module.exports = exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: true,
        },
        debug: true,
        modules: 'umd',
      },
    ],
  ],
};
