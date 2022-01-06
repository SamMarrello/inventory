import '/css/style.css'

function todaysDate() {
    var day = new Date();
    var month = 0, currentDate = "";
    month = day.getMonth() + 1;
    currentDate = day.getDate()+ '-' + month + '-' + day.getFullYear()
    document.getElementById("todaysDate").innerHTML = currentDate;
}