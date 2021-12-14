// validate user input

function validate(){
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (date == " " || date <=0 || date > 31)
        { alert("Enter a valid date")}
        else if (month == " " || month <=0 || month > 12)
        {alert("Enter a valid month")}
        else if (year == " " || !year.match(/^\d\d\d\d$/)){
            alert("Enter a valid year")
        }
        else {
            var exactDay = function(date, month, year){
                var date =document.getElementById("date").value;
                var month = document.getElementById("month").value;
                var year = document.getElementById("year").value;
                
                // calculating the day
                var yy = parseInt(year.slice(-2));
                var mm = parseInt(month);
                var dd = parseInt(date);
                var cc = parseInt(year.slice(0,2));
                var day =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7
                var realDay=Math.ceil(day);

                // alert(realDay);
                // console.log(date, month, year);
                // console.log(yy, mm, dd, cc, day);
                // console.log(realDay);

                // if (realDay == 0){
                //     alert("born on Sunday")
                // }
                // else if (realDay == 1) {
                //     alert("born on Monday")
                // }
                // else if (realDay == 2) {
                //     alert("born on Tuesday")
                // }
                // else if (realDay == 3) {
                //     alert("born on Wednesday")
                // }
                // else if (realDay == 4) {
                //     alert("born on Thursday")
                // }
                // else if (realDay == 5) {
                //     alert("born on Friday")
                // }
                // else if (realDay == 6) {
                //     alert("born on Saturday")
                // }
                // alert(realDay);

                // assign akan names
                var gender = document.querySelector('input[type = "radio"]:checked').value;
                var female = document.getElementById('female');
                var male = document.getElementById('male');

                // female names
                if (female.checked == true){
                    var akanFemaleNames;
                    switch(realDay){
                        case 0:
                            akanFemaleNames = "Akosua";
                            break;
                        case 1:
                            akanFemaleNames = "Adwoa";
                            break;
                        case 2:
                            akanFemaleNames = "Abenaa";
                            break;
                        case 3:
                            akanFemaleNames = "Akua";
                            break;
                        case 4:
                            akanFemaleNames = "Yaa";
                            break;
                        case 5:
                            akanFemaleNames = "Afua";
                            break;
                        case 6:
                            akanFemaleNames = "Ama";
                                    break;
                    }

                    // alert(akanFemaleNames);
                    document.querySelector(".jina").innerHTML= "Your Akan Name is " + " " + akanFemaleNames
                    document.querySelector(".siku").innerHTML= "Your Day of Birth was " + " " + getDayOfBirth()
                }
                else if (male.checked == true){
                    var akanMaleNames;
                    switch(realDay){
                        case 0:
                            akanMaleNames = "Kwasi";
                            break;
                        case 1:
                            akanMaleNames = "Kwadwo";
                            break;
                        case 2:
                            akanMaleNames = "Kwabena";
                            break;
                        case 3:
                            akanMaleNames = "Kwaku";
                            break;
                        case 4:
                            akanMaleNames = "Yaw";
                            break;
                        case 5:
                            akanMaleNames = "Kofi";
                            break;
                        case 6:
                            akanMaleNames = "Kwame";
                                    break;
                    }
                    document.querySelector(".jina").innerHTML= "Your Akan Name is " + " " + akanMaleNames
                    document.querySelector(".siku").innerHTML= "Your Day of Birth was " + " " + getDayOfBirth()
                }
                function getDayOfBirth() {
                    var dayOfBirth = realDay;
                    if (dayOfBirth == 0){
                        return "Sunday"
                    }
                    else if (dayOfBirth == 1) {
                        return"Monday"
                    }
                    else if (dayOfBirth == 2) {
                        return"Tuesday"
                    }
                    else if (dayOfBirth == 3) {
                        return"Wednesday"
                    }
                    else if (dayOfBirth == 4) {
                        return"Thursday"
                    }
                    else if (dayOfBirth == 5) {
                        return"Friday"
                    }
                    else if (dayOfBirth == 6) {
                        return"Saturday"
                    }
                }

                // alert(akanMaleNames);



            }
        }

        exactDay()
}
