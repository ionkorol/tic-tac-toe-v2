module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            lib: "./src/lib",
            screens: "./src/screens",
            assets: "./src/assets",
            style: "./src/style",
            utils: "./src/utils",
            navigation: "./src/navigation",
            "redux-store": "./src/redux-store",
          },
        },
      ],
    ],
  };
};
