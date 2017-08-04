'use strict';

window.addEventListener('DOMContentLoaded', init);

//Hilfsvariable fuer Fehler
var error = true;

var storageItem;
var storageAsString;
var storageAsObject;

//Pattern fuer Email-Validierung
/*
/das Pattern deckt noch nicht alle Moeglichkeiten eine Email-Adresse ab, z.B. xxx.xxx@xxx.de
*/
var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function init() {

    addItem();

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

//document.getElementById("reminderRecipient").addEventListener("click", createOption);
document.getElementById("reminderButton").addEventListener("click", addItem);

function addItem(){

    storageItem = localStorage.getItem('email');

    if(storageItem) storageItem = JSON.parse(storageItem);
    else storageItem = [];

    storageItem.push(document.getElementById('reminderRecipient').value);
    var lastIndex = storageItem.length;
    //alert(lastIndex);
    //alert(storageItem[0]);

    localStorage.setItem('email',JSON.stringify(storageItem));

    storageAsString = localStorage.getItem('email');
    storageAsObject = JSON.parse(storageAsString);

    var doubleItem = storageAsObject.includes("smartillmer@gmail.com");

    createOption();

};


function createOption(){

    storageAsObject = removeDuplicates(storageAsObject);

    //datalist erweitern
    var list = document.getElementById('emails');
    storageAsObject.forEach(function (item) {
        if(!item==""){
            var option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        }
    });
};

function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};

    for (x=0; x<len; x++) {
        obj[num[x]]=0;
    }
    for (x in obj) {
        out.push(x);
    }
    return out;
}
