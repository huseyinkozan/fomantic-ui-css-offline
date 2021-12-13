const fs = require("fs-extra");
const path = require("path");
const replace = require("replace");

const nodeModulesPath = path.join(__dirname, "node_modules");
const fomanticPath    = path.join(__dirname, "node_modules", "fomantic-ui-css");
const distPath        = path.join(__dirname, "dist");

if ( ! fs.existsSync(nodeModulesPath))
    throw new Error("Please run npm install before this script!");

// create clean dist/ dir
if (fs.existsSync(distPath)) {
    fs.removeSync(distPath);
    console.log("Deleted existing dist/ dir");
}
fs.ensureDirSync(distPath);
console.log("Created dist/ dir");

// copy from source
fs.copySync(fomanticPath, distPath);
console.log("Copy fomantic-ui-css into dist/ dir");


// remove import statement
replace({
    regex: /(@import url\(([^)]+)\);)/gui,
    replacement: "",
    paths: [ distPath ],
    include: "*.css",
    recursive: true,
    silent: false,
});

// remove Lato font
replace({
    regex: /\'lato\'\,/gi,
    replacement: "",
    paths: [ distPath ],
    include: "*.css",
    recursive: true,
    silent: false,
});

// remove Lato font
replace({
    regex: /lato\,/gi,
    replacement: "",
    paths: [ distPath ],
    include: "*.min.css",
    recursive: true,
    silent: false,
});
