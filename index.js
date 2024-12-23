// Renderer process
const { remote } = require('electron');




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
      sandbox: false, // Disable sandbox if safe to do so
      contextIsolation: false, // Ensure context sharing

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

app.on("closed", () => {
  mainWindow = null;
  app.quit();
});

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})