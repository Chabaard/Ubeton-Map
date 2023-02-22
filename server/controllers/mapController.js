const path = require("path");
const { getAllActiveExcesses } = require("../services/excess");

module.exports = {
    getMap(req, res, next) {
        const dirName = __dirname.replace(`\\controllers`, '');
        console.log(dirName);
        res.sendFile(path.resolve(dirName, "public", "index.html"));    
    },
    async getExcess(req, res, next) {
        res.json(await getAllActiveExcesses())
    }
}