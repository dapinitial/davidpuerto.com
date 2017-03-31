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
      user: 'ec2-user',
      host: 'ec2-35-163-175-145.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/dap.pem',
      ref: 'origin/master',
      repo: 'git@github.com:dapinitial/davidpuerto.com.git',
      path: '/home/ec2-user/davidpuerto.com',
      'post-deploy': 'npm install;npm run build;pm2 stop;killall -9 node;npm run dev;pm2 start index.js --name "davidpuerto.com" ecosystem.config.js'
    }
  }
}
