const { WebClient } = require('@slack/web-api');
const config = require('../config/config.json');
const channelID = require('./getChannelId');
const weekObj = require('./getMusicGenres');

const userToken = config.userToken;
const web = new WebClient(userToken);

const setTopic = () => {
    const week = `Monday: ${weekObj.Monday}\nTuesday: ${weekObj.Tuesday}\nWednesday: ${weekObj.Wednesday}\nThursday: ${weekObj.Thursday}\nFriday: ${weekObj.Friday}`
    channelID().then((val) => {
        web.conversations.setTopic({
            token: userToken,
            channel: val,
            topic: week
        });
    }).catch((e) => {
        console.log(e);
    });
};

module.exports = setTopic;

