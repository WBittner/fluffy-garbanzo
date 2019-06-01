module.exports = {
    outputDir: 'dist/public',
    chainWebpack: config => {
        //because I moved main.ts into src/client directory
        const app = config.entry("app");
        app.clear();
        app.add("./src/client/main.ts");

        //Because I renamed tsconfig to tsconfig-client
        config.module.rule('tsx').use('ts-loader').tap(options => {options.configFile="tsconfig-client.json";  return options;});
        config.module.rule('ts').use('ts-loader').tap(options => {options.configFile="tsconfig-client.json"; return options;});
        config.plugin('fork-ts-checker').tap(args => {args[0].tsconfig="tsconfig-client.json"; return args;});
    },
}