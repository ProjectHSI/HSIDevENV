var DevENVArgs = process.argv.slice(2);
process.title = "HSI Dev ENV /// HSIDE"
const Stdoutprint = require("npmlog")
Stdoutprint.info("HSIDevEnv", "Welcome to the DEV ENV")
const DevAPI = require("./devset")
DevAPI.uuididentif()
