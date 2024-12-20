module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.test.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
        ],
        alias: [
          {
            '@': './src',
          },
        ],
      },
    ],
  ],
};
