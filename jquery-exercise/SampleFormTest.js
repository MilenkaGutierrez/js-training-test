/**
 * Created by milenkagutierrez on 9/29/2015.
 */
var sampleForm = require('./SampleForm.js');
var WebDriver = require('selenium-webdriver');
var By = WebDriver.By;
var browser = new WebDriver.Builder().withCapabilities(WebDriver.Capabilities.chrome()).build();

describe('Form', function() {

    it('should submit all information', function (done) {
        browser.get('http://parsleyjs.org/doc/examples/simple.html');
        var form = new sampleForm();
        form.setFullName('Pedro');
        form.setEmail('pepe@hotmail.com');
        form.setGender('M');
        form.setHobbies('run','read');
        form.setHeardAboutUs('internet');
        form.clickValidate();
        browser.wait(function(){done();},5000);

        var actRes = form.getGoodResult();
        var expRes = browser.findElement(By('div.bs-callout-info h4')).val()

        expect(actRes).toEqual(expRes);
    });

    it('should not submit the information', function (done) {
        browser.get('http://parsleyjs.org/doc/examples/simple.html');
        var form = new sampleForm();
        form.setFullName('Pedro');
        form.setEmail('hola');
        form.setGender('M');
        form.setHobbies('run','read');
        form.setHeardAboutUs('');
        form.clickValidate();
        browser.wait(function(){done();},5000);

        var actRes = form.getBadResult();
        var expRes = browser.findElement(By('div.bs-callout-warning h4')).val()

        expect(actRes).toEqual(expRes);
    });
});