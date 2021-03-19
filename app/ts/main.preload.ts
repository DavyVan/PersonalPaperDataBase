function replaceText(selector: string, text: string): void {
    const element = document.getElementById(selector);
    if (element) {
        element.innerText = text;
    } else {
        console.log("not found");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]!);
    }
});