/**
 * Created by milenkagutierrez on 9/29/2015.
 */
var SampleForm = function(){

}

SampleForm.prototype.setFullName = function(name){
    $('form#demo-form input[type=text]').val(name);
}

SampleForm.prototype.setEmail = function(email){
    $('form#demo-form input[type=email]').val(email);
}

SampleForm.prototype.setGender = function(gender){
    if(gender == F)
        $('form#demo-form input#genderF').click();
    if(gender == M)
        $('form#demo-form input#genderM').click();
}

SampleForm.prototype.setHobbies = function(){
    for(var i = 0; i < arguments.length; i++)
    {
        var hobbie = arguments[i];
        $('form#demo-form input[value = hobbie]').click();
    }
}

SampleForm.prototype.setHeardAboutUs = function(place){
    $('form#demo-form select#heard option[value= place ]').click()
}

SampleForm.prototype.clickValidate = function(){
    $('form#demo-form input[type=submit]').submit()
}

SampleForm.prototype.getGoodResult = function() {
    $('div.bs-callout-info h4').text();
}

SampleForm.prototype.getBadResult = function() {
    $('div.bs-callout-warning h4').text();
}

module.exports = SampleForm;