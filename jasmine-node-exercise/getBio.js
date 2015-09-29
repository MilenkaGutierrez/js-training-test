/**
 * Created by milenkagutierrez on 9/29/2015.
 */
var getBio = function(name, age){
    if(name === undefined || age === undefined)
        throw 'Need name and age to provide a biography.'
    if(typeof(age) != 'number' || age < 0)
        throw 'Invalid age.'
    return 'Hi, my name is '+ name +', I am '+ age +' years old and I am a nice guy.';
}

module.exports = getBio;