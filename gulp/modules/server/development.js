import browserSync from 'browser-sync';
import config from '../../config';

export default () => {
  const port = process.env.PORT;
  const server = browserSync.create();

  server.init({
    port,
    open: false,
    notify: false,
    server: {
      baseDir: config.distDir
    },
    files: [
      `${config.distDir}/**/*`
    ]
  });
};
