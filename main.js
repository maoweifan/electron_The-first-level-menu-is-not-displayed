const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800, height: 600, webPreferences: {

        },
    });

    mainWindow.loadFile("index.html");
    mainWindow.webContents.openDevTools();

    const menu = Menu.buildFromTemplate([
        {
            label: '1 lable',
            click: () => {

            }
        },
        {
            label: '2 lable',
        },
        {
            label: '3 label',
            submenu: [
                { role: 'undo', label: '3-1 label' },
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
