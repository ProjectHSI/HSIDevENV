var DevENVArgs = process.argv.slice(2);
process.title = "HSI Dev ENV /// HSIDE"
const fs = require("fs")
const Stdoutprint = require("npmlog")
Stdoutprint.info("HSIDevEnv", "Welcome to the DEV ENV")
Stdoutprint.info("HSIDevEnv", "This uses the module npmlog to do some logging infos.")
Stdoutprint.warn("HSIDevEnvTemp", `This is only temporary.`)
Stdoutprint.warn("HSIDevEnvTemp", DevENVArgs)
Stdoutprint.warn("HSIDevEnvTemp", "windows\r\ndone\r\nlinux\ndone")
switch (DevENVArgs[0]) {
  case "Help":
    console.clear()
    Stdoutprint.info("HSIDevEnvHelp", "██████████████████████████████████████████████")
    Stdoutprint.info("HSIDevEnvHelp", "█------------- HSI Dev Env Help -------------█▒")
    Stdoutprint.info("HSIDevEnvHelp", "█                                            █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█ This program is a work in progress.        █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█                                            █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█ Help - Shows This Screen                   █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█                                            █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█ LaunchBOTClient - Launches the bot client. █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█                                            █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█ Notices are listed below.                  █▒")
    Stdoutprint.info("HSIDevEnvHelp", "█                                            █▒")
    Stdoutprint.info("HSIDevEnvHelp", "██████████████████████████████████████████████▒")
    Stdoutprint.info("HSIDevEnvHelp", " ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
    Stdoutprint.notice("HSIDevEnvNotice", "This software may also be used under a program as long as you have the required software and permission to.")
    Stdoutprint.notice("HSIDevEnvNotice", "This software distro also has a unique identifer and may be destoryed if you have done improper actions.")
    Stdoutprint.notice("HSIDevEnvNotice", "This software may be modifed to suit your needs. The following characters are used for the message boxes: █▒")
    Stdoutprint.notice("HSIDevEnvNotice", "To use this software under a program enter this code into your application:")
    Stdoutprint.code("HSIDevEnvCode", "// %APPLICATIONDIR% is not apart of the code and is to be replaced of where devset.js is stored. %FUNCTION% is the name of the function you wish to call.\nvar DevENV = require(%APPLICATIONDIR%/devset.js)\nDevENV.%FUNCTION%()\n")
    break;
  case "DownloadMinfifed":
    const childprocess = require("child_process")
    console.clear()
    Stdoutprint.warn("HSIDevEnvWarning", "███████████████████████████████")
    Stdoutprint.warn("HSIDevEnvWarning", "█---------- WARNING ----------█▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█                             █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█ ARE YOU SURE?               █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█                             █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█ This replaces the startup   █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█ file and launches the min-  █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█ ifed file instead.          █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█                             █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█ Answer Y to continue.       █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "█                             █▒")
    Stdoutprint.warn("HSIDevEnvWarning", "███████████████████████████████▒")
    Stdoutprint.warn("HSIDevEnvWarning", " ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('ARE YOU SURE YOU WISH TO CONTINUE?', (answer) => {
      if (answer == "y") {
        fs.writeFileSync("./package.json", `{\n"name": "devinform",\n"version": "0.0.1",\n"description": "",\n"main": "devset.js",\n"scripts": {\n"test": "node devset.js --test"\n},\n"author": "[Project HSI]",\n"license": "UNLICENSED",\n"dependencies": {\n"discord.js": "^11.6.4",\n"npmlog": "^4.1.2"\n}\n}`)
        const client = childprocess.spawn('pwsh.exe', ['/c', 'minifdownload.ps1'])
        client.stdout.on('data', (data) => {
          Stdoutprint.info("Stdout of Client", data.toString());
        });
        client.stderr.on('data', (data) => {
          Stdoutprint.error("Stderr of Client", data.toString());
        });
      }

    rl.close();
});
    break;
  case "LaunchBOTClient":
    console.clear()
    Stdoutprint.info("HSIDevEnvLauncher", "██████████████████████████████████████████████████████████████████")
    Stdoutprint.info("HSIDevEnvLauncher", "█--------------------- HSI Dev Env Launcher ---------------------█▒")
    Stdoutprint.info("HSIDevEnvLauncher", "█                                                                █▒")
    Stdoutprint.info("HSIDevEnvLauncher", "█ This is the HSI Bot Client Launcher From the DEV ENV Client    █▒")
    Stdoutprint.info("HSIDevEnvLauncher", "█                                                                █▒")
    Stdoutprint.info("HSIDevEnvLauncher", "██████████████████████████████████████████████████████████████████▒")
    Stdoutprint.info("HSIDevEnvLauncher", " ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
    Stdoutprint.info("bootstrap.js", " Launching ./HSIDevFiles/SBin/Bootstrap.js")
    const bootstraper = require("./HSIDevFiles/SBin/bootstrap.js")
    bootstraper.BootStrapOperationOpenBotClient()
    break;
}

module.exports = {

  uuididentif: function () {
    Stdoutprint.info("HSIDevEnvProgram", "██████████████████████████████████████████████████████████████████")
    Stdoutprint.info("HSIDevEnvProgram", "█------------------ HSI Dev Env Program Module ------------------█▒")
    Stdoutprint.info("HSIDevEnvProgram", "█                                                                █▒")
    Stdoutprint.info("HSIDevEnvProgram", `█ You have called uuididentif() - UUID will be displayed below.  █▒`)
    Stdoutprint.info("HSIDevEnvProgram", "█                                                                █▒")
    Stdoutprint.info("HSIDevEnvProgram", "██████████████████████████████████████████████████████████████████▒")
    Stdoutprint.info("HSIDevEnvProgram", " ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
    Stdoutprint.info("HSIDevEnvProgram", fs.readFileSync("./uuid.uuid").toString())
  }

}
