//Add an event to clear the warning message when the firstName is entered
document.querySelector('#firstName').addEventListener("change",function(){
  if(this.value !== ""){
    fnameWarning.innerHTML = "";
  }
});

//Add an event to clear the warning message when the lirstName is entered
document.querySelector('#lastName').addEventListener("change",function(){
  if(this.value !== ""){
    lnameWarning.innerHTML = "";
  }
});

//Add an event to clear the warning message when the address1 is entered
document.querySelector('#address1').addEventListener("change",function(){
  if(this.value !== ""){
    address1Warning.innerHTML = "";
  }
});

//Add an event to clear the warning message when the city is entered
document.querySelector('#city').addEventListener("change",function(){
  if(this.value !== ""){
    cityWarning.innerHTML = "";
  }
});

//Add an event to clear the warning message when the province is selected
document.querySelector('#province').addEventListener("change",function(){
  if(this.value !== ""){
      provinceWarning.innerHTML = "";
  }
});
//Add an event to clear the warning message when the country is selected
document.querySelector('#country').addEventListener("change",function(){
  if(this.value !== ""){
    countryWarning.innerHTML = "";
  }
});

//Add an event to the form on submit to validate input
document.profile.addEventListener("submit",validate);
