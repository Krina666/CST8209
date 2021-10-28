//validate module
document.profile.addEventListener("submit", validate);

function validate(e) {

    e.preventDefault();

    var valid = true;
    //name
    if (profile.firstName.value == "") {
        document.querySelector('#fnameWaring').innerHTML = " * Please enter a first name * ";
        valid = false;
    }
    //lastname
    if (profile.lastName.value == "") {
        document.querySelector('#lnameWaring').innerHTML = " * Please enter a lirst name * ";
        valid = false;
    }
    //gender
    var isChecked = Array.prototype.some.call(document.querySelectorAll('input[name=gender]'), function(radio) {
        return radio.checked;
    });

    if (!isChecked) {
        document.querySelector('#genderWarning').innerHTML = "* Please select a gener *";

    }

    //age
    if (profile.age.value == "") {
        document.querySelector('#ageWaring').innerHTML = " * Please enter your age * ";
        valid = false;
    }

    //band
    if(profile.binfo.value == ""){
        document.querySelector('#brandWarning').innerHTML="*Please enter your favorite brand *";
        valid=false;
    }

    //city
    if (profile.city.value == "") {
        document.querySelector('#cityWarning').innerHTML = " * Please enter city * ";
        valid = false;
    }
    //province
    if (profile.province.value == "") {
        document.querySelector('#provinceWarning').innerHTML = " * Please enter province * ";
        valid = false;
    }
    //country
    if (profile.country.value == "") {
        document.querySelector('#countryWarning').innerHTML = " * Please enter country * ";
        valid = false;
    }

    if (profile.date.value == "") {
        document.querySelector('#dateWarning').innerHTML = " * Please choose a date* ";
        valid = false;
    }

    if (valid) {
        alert("Thank you!");
    }
    return valid;
};