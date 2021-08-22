module.exports = {
  apps: [
    {
      name: 'Client',
      script: 'nest start client --watch',
      // watch: true,
      // watch_delay: 1000,
      ignore_watch: ['node_modules', 'logs'],
      // out_file: './logs/client/out.log',
      // log_file: './logs//client/combined.log',
    }
  ],
};
