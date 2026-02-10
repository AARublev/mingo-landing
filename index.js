const { exec } = require('child_process');

console.log('Starting Next.js application...');

// Сначала собираем проект
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error}`);
    return;
  }
  console.log(stdout);
  
  // После успешной сборки запускаем приложение
  console.log('Build completed. Starting server...');
  exec('npm run start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Start error: ${error}`);
      return;
    }
    console.log(stdout);
  });
});
