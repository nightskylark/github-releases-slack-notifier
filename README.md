# github-releases-slack-notifier

This module is a simple Slackbot that post a notification to a Slack group channel when new releases for one of configured GitHub repositories released new version.

Implementation of this module uses [rss-slack-integration](https://www.npmjs.com/package/rss-slack-integration)

## Installation

`npm install github-releases-slack-notifier`

## Configuration and starting

Application needs an incoming webhook in your Slack. You can create it [here](https://my.slack.com/services/new/incoming-webhook)

* Copy your `webhookUrl`
* Create `config.json` file using `config.json.template`. Example:
```
{
	"webhookUrl": "https://hooks.slack.com/services/yourservicehash",
	"icon": ":loudspeaker:",
	"interval": 3600
}
```
* Insert your `webhookUrl` into the config file
* Change default `icon` (smile code or url) and `interval` (seconds) if it is necessary
* Create `repos.json` file using `repos.json.template`
* Add a config object for each repo using example from template. `url` is a required field and the rest fields are optional. Example:
```
[
	{
		"url": "https://github.com/jquery/jquery",
		"name": "jQuery",
		"webhookUrl": "https://hooks.slack.com/services/YourAlternativeServiceHash",
		"icon": "https://example.com/icon.png",
		"interval": 1800,
		"botName" : "jQuery releases"
	},
	{
		"url": "https://github.com/angular/angular"
	}
]
```
* Run `index.js` on your server

`node index`

**Note:** It's recommended to start this application as a backgroud process and setup it to start automatically after server restarting.

## Created by

[Evgeny Zhavoronkov](https://github.com/nightskylark)


## Issues and contributions

If you experience any issues with this module you can submit issues at the
[project's Github Repository](https://github.com/nightskylark/github-releases-slack-notifier/issues).

Any help towards improving this module is welcome. If you want to add features
or fix bugs you are welcome to submit a
[pull request](https://github.com/nightskylark/github-releases-slack-notifier/pulls).

## License

This project is licensed under MIT. See the
[LICENSE file](https://github.com/pilsprog/rss-slack-integration/blob/master/LICENSE).
