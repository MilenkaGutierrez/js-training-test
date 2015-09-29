
var Biography = require('./getBio.js')

describe('Biography', function(){

    it('should display an error when the name and age are undefined', function(){
        expect(function(){
            Biography();
        }).toThrow('Need name and age to provide a biography.');
    });

    it('should display an error when the age is a string', function(){
        expect(function(){
            Biography('jose', 'dos');
        }).toThrow('Invalid age.');
    });

    it('should display an error when the age is less than 0', function(){
        expect(function(){
            Biography('jose',-1);
        }).toThrow('Invalid age.');
    });

    it('should display an the name and age correctly', function(){
        //Steps
        var actRes = Biography('jose', 2);
        var expRes = 'Hi, my name is jose, I am 2 years old and I am a nice guy.';
        //Validation
        expect(actRes).toEqual(expRes);
    });

});