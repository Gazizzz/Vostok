import dotenv from 'dotenv';

dotenv.load();

const gulpConfig = {
  env: process.env.NODE_ENV,
  appDir: 'app',
  distDir: 'dist',
  configDir: 'config',
  gulpDir: 'gulp'
}

export default gulpConfig;
