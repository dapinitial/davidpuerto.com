module.exports = {
  apps: [{
    name: 'davidpuerto.com',
    script: './app/build/index.js',
    watch: true,
    env: {
      'NODE_ENV': 'development',
    },
    env_production : {
       'NODE_ENV': 'production'
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-211-70-142.us-west-2.compute.amazonaws.com',
      key: '~/home/ubuntu/.ssh/dap.pem',
      ref: 'origin/master',
      repo: 'git@github.com:dapinitial/davidpuerto.com.git',
      path: '/home/ubuntu/davidpuerto.com',
      'post-deploy': 'yarn;yarn build;pm2 stop;killall -9 node;yarn dev;pm2 start index.js --name "davidpuerto.com" ecosystem.config.js'
    }
  }
}
