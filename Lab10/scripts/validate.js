//validate module
function validate(e){

    e.preventDefault();

    var valid = true;

        if(profile.firstName.value == ""){
          document.querySelector('#fnameWarning').innerHTML = " * Please enter a first name * ";
          valid = false;
        }

        if(profile.lastName.value == ""){
          document.querySelector('#lnameWarning').innerHTML = " * Please enter a lirst name * ";
          valid = false;
        }

        if(profile.address1.value == ""){
          document.querySelector('#address1Warning').innerHTML = " * Please enter address1 * ";
          valid = false;
        }


        if(profile.city.value == ""){
          document.querySelector('#cityWarning').innerHTML = " * Please enter city * ";
          valid = false;
        }

        if(profile.province.value == ""){
           document.querySelector('#provinceWarning').innerHTML = " * Please enter province * ";
          valid = false;
         }

        if(profile.country.value == ""){
          document.querySelector('#countryWarning').innerHTML = " * Please enter country * ";
          valid = false;
        }
        if(valid){
          alert("Thang you!");
        }
        return valid;
      };
