/* -------------------- This is the entry of this project ------------------- */

const {app, BrowserWindow} = require("electron");
const path = require("path");

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "main.preload.js"),
            nodeIntegration: true,
        }
    });
    win.loadFile("app/html/index.html");
    win.webContents.openDevTools({
        "mode": "detach"
    });

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            const win = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    preload: "main.preload.js",
                    nodeIntegration: true,
                }
            });
            win.loadFile("app/html/index.html");
            win.webContents.openDevTools({
                "mode": "detach"
            });
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
