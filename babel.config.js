module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.svg'],
          alias: {
            '@app': './src/',
          },
        },
      ],
    ],
  };
};
