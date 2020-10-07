const fs = require('fs');

const file = fs.readFileSync('assets/musicgenres.csv', 'utf8')
const dataArray = file.split(/\r?\n/);


const genreWeek = () => {
    let weekObj = {"Monday": "", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": ""};

    for(day in weekObj) {
        let num = Math.floor(Math.random() * 100);
        weekObj[day] += dataArray[num];
    };    
    return weekObj;
};

module.exports = genreWeek();