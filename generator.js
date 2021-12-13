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
}