const { exec } = require('child_process');

console.log('Starting Next.js application...');

// Сначала собираем проект
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error}`);
    return;
  }
  console.log(stdout);
  
  // После успешной сборки запускаем приложение на порту 80
  console.log('Build completed. Starting server on port 80...');
  exec('PORT=80 npm run start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Start error: ${error}`);
      return;
    }
    console.log(stdout);
  });
});
