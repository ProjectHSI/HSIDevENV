const fs = require("fs")
const Stdoutprint = require("npmlog")
switch (DevENVArgs[2]) {
  case "Help":
    Stdoutprint.info("HSIDevEnvHelp", "This program is a work in progress.")
    Stdoutprint.info("HSIDevEnvHelp", "Help Shows This Screen")
    Stdoutprint.info("HSIDevEnvHelp", "LaunchBOTClient - Launches the bot client.")
    Stdoutprint.notice("HSIDevEnvNotice", "This software may also be used under a program as long as you have the required software and permission to.")
    Stdoutprint.notice("HSIDevEnvNotice", "This software distro also has a unique identifer and may be destoryed if you have done improper actions.")
    Stdoutprint.notice("HSIDevEnvNotice", "This software may be modifed to suit your needs. The following characters are used for the message boxes: █▒")
    Stdoutprint.notice("HSIDevEnvNotice", "To use this software under a program enter this code into your application:")
    Stdoutprint.code("HSIDevEnvCode", "// %APPLICATIONDIR% is not apart of the code and is to be replaced of where devset.js is stored. %FUNCTION% is the name of the function you wish to call.\nvar DevENV = require(%APPLICATIONDIR%/devset.js)\nDevENV.%FUNCTION%()\n")
    break;
  case "LaunchBOTClient":
    Stdoutprint.info("bootstrap.js", " Launching ./HSIDevFiles/SBin/Bootstrap.js")
    const bootstraper = require("./HSIDevFiles/SBin/bootstrap.js")
    bootstraper.BootStrapOperationOpenBotClient()
    break;
}

module.exports = {

  uuididentif: function () {
    Stdoutprint.info("HSIDevEnvProgram", fs.readFileSync("./uuid.uuid").toString())
  }

}
