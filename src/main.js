const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true,
		backgroundColor: 'antiquewhite',
		show: false,
		webPreferences: {
			webviewTag: true,
			nodeIntegration: true,
			contextIsolation: false,
		}
	});

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	})

	mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});


