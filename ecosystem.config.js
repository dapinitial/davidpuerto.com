module.exports = {
  apps: [{
    name: 'davidpuerto.com',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-35-163-175-145.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/dap.pem',
      ref: 'origin/master',
      repo: 'git@github.com:dapinitial/davidpuerto.com.git',
      path: 'davidpuerto.com',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
