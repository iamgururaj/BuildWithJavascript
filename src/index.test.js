import {expect} from 'chai';
import starwarsNames from './index';

describe('starwars-names', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            expect(starwarsNames.all).to.satisfy(isArrayOfStrings);
            function isArrayOfStrings(array){
                return array.every(function (item) {
                   return typeof item === 'string';
                });
            }
        });
        
        it('should contain Luke Skywalker', function () {
            expect(starwarsNames.all).to.include('Luke Skywalker');
        });

    });

    describe('random', function () {
       it('should return a random item', function () {
               var randomItem = starwarsNames.random();
               expect(starwarsNames.all).to.include(randomItem);
       });

       it('should return an array of random items if passed', function () {
           var randomItems = starwarsNames.random(3);
           expect(randomItems).to.have.length(3);
           randomItems.forEach(function (item) {
              expect(starwarsNames.all).to.include(item);
           });
       });
    });

    describe('size', function () {
       it('should be number and not zero', function(){
          var size = starwarsNames.size;
           expect(size).to.be.a('number');
       });
    });
});