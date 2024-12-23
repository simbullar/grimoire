process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error); // Log the error to console
});

const { app, BrowserWindow } = require('electron');
const path = require('node:path');
let mainWindow ;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
    },
  });

  mainWindow.loadFile('index.html');
  //mainWindow.webContents.openDevTools(); // Uncomment for debugging
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  console.log('window-all-closed event triggered');
  app.quit();
  return
});
mainWindow.on('close', () => {
  console.log('mainWindow close event triggered');
});
