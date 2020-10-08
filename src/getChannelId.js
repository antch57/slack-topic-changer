const { WebClient } = require('@slack/web-api');
const config = require('../config/config.json');

const botToken = config.botToken;

const web = new WebClient(botToken);

const channelID = async () => {
    const channelList = await web.conversations.list({
        token: botToken
    });

    const channel = channelList.channels.filter((e) => e.name == 'musicsharing');
    return channel[0].id;
}

module.exports = channelID;
