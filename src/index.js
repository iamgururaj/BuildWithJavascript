import uniqueRandomArray from 'unique-random-array';
import starwarsNames from './startwars-names.json';

var getRandomItem = uniqueRandomArray(starwarsNames);

module.exports = {
    all:starwarsNames,
    random:random,
    size: starwarsNames.length
};

function random(num) {
    if(num === undefined){
        return getRandomItem();
    } else {
        var randomItems = [];
        for(var i=0;i<num;i++){
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}
