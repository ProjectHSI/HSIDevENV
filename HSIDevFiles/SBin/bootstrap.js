const Stdoutprint = require('npmlog');
const Discord = require("discord.js")

const childprocess = require("child_process")

const Token = "Njc5NjI2NjA0ODk2NzE0Nzc5.XrjKRA.ampHQzTjg0K2RixtVZoZASv-6l0"

const BootstrapDiscordClient = new Discord.Client()

module.exports = {
  BootStrapOperationOpenBotClient: function () {
    Stdoutprint.info("Bootstraper", process.argv)
    Stdoutprint.info("Bootstraper", `HSI TERMINAL BOOTSTRAPER`)
    Stdoutprint.info("Bootstraper", `Creating Client Object.`)
    const BootstrapDiscordClient = new Discord.Client()
    Stdoutprint.info("Bootstraper", `Done.`)
    Stdoutprint.info("Bootstraper", `Logging in.`)
    BootstrapDiscordClient.login(Token)
    Stdoutprint.info("Bootstraper", `Logged in.`)
    BootstrapDiscordClient.on('ready', () => {
      BootstrapDiscordClient.guilds.get("609465408398819338").channels.get('680880687414640760').send(">ClientPrepare")
      Stdoutprint.info("Bootstraper", `Launching client.`)
      const client = childprocess.spawn('cmd.exe', ['/c', 'LaunchClient.bat'])
      client.stdout.on('data', (data) => {
        Stdoutprint.info("Stdout of Client", data.toString());
      });
      client.stderr.on('data', (data) => {
        Stdoutprint.error("Stderr of Client", data.toString());
      });
      Stdoutprint.info("Bootstraper", `Launched client.`)
    clientelec.on('exit', (code) => {
      log.notice("Bootstraper", "Exiting.")
      if (code != 0) {
        log.error("Bootstraper", "Bootstraper determined an error caused the process to exit.")
      }
      process.exit(code)
    })
  })
}
