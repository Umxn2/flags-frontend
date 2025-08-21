module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@': './',
          '@components': './app/components',
          '@screens': './app/screens',
          '@styles': './app/styles'
        }
      }]
    ]
  };
};
