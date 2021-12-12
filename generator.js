// validate user input

function validate () {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
}

// initial day of the week formula start

    // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// initial day of the week formula end

// day of the week formula start sample 1

if (date == " " || month == " " || year == " "){
    return false;
    
}
else{
    var cc = year.slice(2);
    var yy = year.slice(-2);
    console.log( "cc" + cc + "yy" + yy)
    let dateOfBirth = year + "-" + month + "-" + date;
    let dayDate = new date(dateOfBirth);
    console.log(dayDate);
    let dayOfTheWeek = dayDate.getDay();

    return dayOfTheWeek;
}

// day of the week formula end sample 1

// akan name submit button function start

    function yourAkanName(){
        let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
        let weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var jinsia = document.getElementById("gender");
        console.log(gender);


        jinsia.forEach((gender) => {
            if(gender.checked){
                console.log(`You Checked: ${gender.value}`);
                console.log(gender.value);
                console.log(gender);

                // conditions
                if (gender.value === "male"){
                    document.querySelector(".jina").innerHTML = "Your Akan Name is" + maleNames[validate()];
                    document.querySelector(".siku").innerHTML = "Your Day of Birth is" + weekDays[validate()];
                    console.log("Your Akan Name is " + maleNames[validate()]);
                }



                if (gender.value === "female"){
                    document.querySelector(".jina").innerHTML = "Your Akan Name is" + femaleNames[validate()];
                    document.querySelector(".siku").innerHTML = "Your Day of Birth is" + weekDays[validate()];
                    console.log("Your Akan Name is " + femaleNames[validate()]);
                }
            }
        })

    }