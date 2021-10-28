//firstName entered
document.querySelector('#firstName').addEventListener("change", function() {
    if (this.value !== "") {
        fnameWaring.innerHTML = "";

        document.querySelector('#infolist').innerHTML = document.querySelector('#infolist').innerHTML + "<li>" + this.value + "</li>";

    }
});

//lirstName entered
document.querySelector('#lastName').addEventListener("change", function() {
    if (this.value !== "") {
        lnameWaring.innerHTML = "";
        document.querySelector('#infolist').innerHTML = document.querySelector('#infolist').innerHTML + "<li>" + this.value + "</li>";
    }
});

//age entered
document.querySelector('#age').addEventListener("change", function() {
    if (this.value !== "") {
        ageWaring.innerHTML = "";

        document.querySelector('#infolist').innerHTML = document.querySelector('#infolist').innerHTML + "<li>" + this.value + "</li>";

    }
});

//Favorite Brand entered
document.querySelector('#binfo').addEventListener("change", function(){
    if(this.value !== ""){
        brandWarning.innerHTML = "";
    }
});

//city entered
document.querySelector('#city').addEventListener("change", function() {
    if (this.value !== "") {
        cityWarning.innerHTML = "";
        document.querySelector('#infolist').innerHTML = document.querySelector('#infolist').innerHTML + "<li>" + this.value + "</li>";
    }
});

//province selected
document.querySelector('#province').addEventListener("change", function() {
    if (this.value !== "") {
        provinceWarning.innerHTML = "";
        document.querySelector('#orderedList').innerHTML = document.querySelector('#orderedList').innerHTML + "<li>" + this.value + "</li>";
    }
});
//country is selected
document.querySelector('#country').addEventListener("change", function() {
    if (this.value !== "") {
        countryWarning.innerHTML = "";
        document.querySelector('#orderedList').innerHTML = document.querySelector('#orderedList').innerHTML + "<li>" + this.value + "</li>";
    }
});

document.querySelector('#date').addEventListener('change', function() {
        if (this.value !== "") {
            dateWarning.innerHTML = "";
        }

    })
    //Add an event to the form on submit to validate input