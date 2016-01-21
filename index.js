var rsi = require("rss-slack-integration"),
	config = require('./config.json'),
	repos = require('./repos.json');

repos.forEach(function(repo) {
	rsi.start({
		feed: repo.url + "/releases.atom",
		interval: repo.interval || config.interval,
		slackHook: repo.webhookUrl || config.webhookUrl,
		slackIcon: repo.icon || config.icon,
		slackBotUser: repo.botName || config.botName || ((repo.name || "GitHub") + " releases notifier")
	});
});
