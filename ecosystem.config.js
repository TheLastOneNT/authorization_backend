module.exports = {
  apps: [{
    name: 'inventory_ecl_backend',
    script: 'npm',
    args: 'run start',
    instances: '3',
    exec_mode: 'cluster',
    watch: true,
    interpreter: '/home/user/.nvm/versions/node/v16.20.0/bin/node',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    log_file_max_size: '10M'
  }]
}
