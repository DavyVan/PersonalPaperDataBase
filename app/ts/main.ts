/* -------------------- This is the entry of this project ------------------- */

import { app, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    win.loadFile("app/html/index.html");
    win.webContents.openDevTools({
        "mode": "detach"
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
