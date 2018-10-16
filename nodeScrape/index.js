const rp = require('request-promise');
const cherio = require('cheerio');
const Table = require('cli-table');

let users = [];

const options = {
    url:''
    json: true
}

rp(options)
    .then((data) => {
        let promises = [];
        let userData = [];
        for (let user of data.directory_items) {
            userData.push({name: user.user.username, likes_received: user.likes_received});
        }
        process.stdout.write('loading');
        getChallengesCompletedAndPushedToUserArray(userData);
    })
    .catch((err) => {
        console.log(err);
    })

function getChallengesCompletedAndPushedToUserArray(userData) {
    
}