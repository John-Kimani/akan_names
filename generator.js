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

                alert(realDay);

                if (realDay == 0){
                    alert("born on Sunday")
                }
                else if (realDay == 1) {
                    alert("born on Monday")
                }
                else if (realDay == 2) {
                    alert("born on Tuesday")
                }
                else if (realDay == 3) {
                    alert("born on Wednesday")
                }
                else if (realDay == 4) {
                    alert("born on Thursday")
                }
                else if (realDay == 5) {
                    alert("born on Friday")
                }
                else {
                    alert("born on Saturday")
                }
                alert(realDay);

            }
        }
}