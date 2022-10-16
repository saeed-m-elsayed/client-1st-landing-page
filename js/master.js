//start sheetdb api form


    var form = document.getElementById('sheetdb-form');
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let date = document.getElementById("date");
    let userDate = new Date();
    function clearData(){
        name.value = ''
        phone.value = ''
        date.value = ''
    }
form.addEventListener("submit", e => {
    date.value = userDate;
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
        ).then((html) => {
        clearData();
        // window.location.href = "../pages/thanks.html"
        window.open('pages/thanks.html', '_blank');


});
});

// end sheetdb api form

// start sticky
let sticky = document.getElementById("sticky-footer")

window.onscroll = function(){
    if(scrollY >= 400){
        sticky.style.opacity = '1'
        sticky.style.bottom = '15px'
    }
    else{
            sticky.style.opacity = '0'
            sticky.style.bottom = '-50px'
    }
}
// end sticky


// start count down
    
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
h.value = 1
m.value = 59
s.value = 59
//store a reference to the startTimer variable
var startTimer = null;

window.onload = function timeReady(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
}

// reset.addEventListener('click', function(){
//     h.value = 0;
//     m.value = 0;
//     s.value = 0;
//     //stop the timer after pressing "reset"
//     stopInterval()
// })

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}
// end count down
