'use strict';

window.addEventListener('DOMContentLoaded', init);

//Hilfsvariable fuer Fehler
var error = true;

//Pattern fuer Email-Validierung
/*
/das Pattern deckt noch nicht alle Moeglichkeiten eine Email-Adresse ab, z.B. xxx.xxx@xxx.de
*/
var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function init() {
    
    var reminderRecipient = document.getElementById("reminderRecipient");
    var reminderContent = document.getElementById("reminderContent");
    var reminderButton = document.getElementById("reminderButton");

    setInterval(function () {
        
        //Email ueberpruefen
        if(reminderRecipient.value.match(emailPattern)){
            reminderRecipient.classList.remove("invalidEmail");
            reminderRecipient.classList.add("validEmail");
            error = false;
        }else{
            reminderRecipient.classList.remove("validEmail");
            reminderRecipient.classList.add("invalidEmail");
            error = true;
        }
        
        if(!(reminderContent.value)=="" && error === false){
            document.body.style.backgroundColor = "#05e000";
            reminderButton.style.display = "block";
        }else{
            document.body.style.backgroundColor = "#ff0000";
            reminderButton.style.display = "none";
            error = true;
        }
    },200);

};
