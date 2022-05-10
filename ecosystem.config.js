module.exports = {
  apps: [
    {
      name: 'Client',
      script: 'node ./dist/apps/client/main.js',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/client/out.log',
      // log_file: './logs//client/combined.log',
      // instances : "1",
    // exec_mode : "cluster",
    },
  //  {
    //  name: 'Socket',
      //script: 'node ./dist/apps/socket/main.js',
      // watch: true,
      // watch_delay: 1000,
      //ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/client/out.log',
      // log_file: './logs//client/combined.log',
    //},
  ],
};
