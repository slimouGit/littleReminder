'use strict';

window.addEventListener('DOMContentLoaded', init);

//Hilfsvariable fuer Fehler
var error = true;

var storageItem;
var storageAsString;
var storageAsObject;

//Pattern fuer Email-Validierung
var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//----------------------------------------------------------------------------------------------------------

function init() {
    
    //Anzeige der Option, den Speicher zu loeschen, wenn Daten enthalten
    if(!((localStorage.getItem('email'))==null)){
        document.getElementById("deleteStorage").style.display = "block";
    }
    
    addItem();

    var reminderRecipient = document.getElementById("reminderRecipient");
    var reminderContent = document.getElementById("reminderContent");
    var reminderButton = document.getElementById("reminderButton");
    
    document.getElementById("deleteStorage").addEventListener("click", deleteStorage);
    document.getElementById("reminderButton").addEventListener("click", addItem);

    setInterval(function () { manageInterface(); },200);
    
};

//----------------------------------------------------------------------------------------------------------

//Funktion validiert die eingegebene Email und prueft, ob das Feld fuer die Nachricht einen Text enthaelt
function manageInterface(){
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
        
        //Inputfield ueberpruefen
        if(!(reminderContent.value)=="" && error === false){
            document.body.style.backgroundColor = "#05e000";
            reminderButton.style.display = "block";
        }else{
            document.body.style.backgroundColor = "#ff0000";
            reminderButton.style.display = "none";
            error = true;
        }   
};

//----------------------------------------------------------------------------------------------------------

//Funktion befuellt local storage
function addItem(){
    
    storageItem = localStorage.getItem('email');
    
    if(storageItem) storageItem = JSON.parse(storageItem);
    else storageItem = [];
    
    //doppelte Elemente loeschen
    storageItem = removeDuplicates(storageItem);

    storageItem.push(document.getElementById('reminderRecipient').value);
    localStorage.setItem('email',JSON.stringify(storageItem));
    storageAsString = localStorage.getItem('email');
    storageAsObject = JSON.parse(storageAsString);
    createOption();
};

//----------------------------------------------------------------------------------------------------------

//Funktion erstellt die Items in der datalist
function createOption(){
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

//----------------------------------------------------------------------------------------------------------

//Funktion entfernt doppelte Eintraege in einem Array
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
};

//----------------------------------------------------------------------------------------------------------

//Funktion loescht den local storage
function deleteStorage(){
    localStorage.clear();
    location.reload();
};

//----------------------------------------------------------------------------------------------------------
