import uniqueRandomArray from 'unique-random-array';
import names from './startwars-names.json';

var getRandomItem = uniqueRandomArray(names);

module.exports = {
    all:names,
    random:random,
    size: names.length
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
