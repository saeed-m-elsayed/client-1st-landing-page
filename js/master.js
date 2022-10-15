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
        window.alert("تم شكراً لك.")

});
});

// end sheetdb api form