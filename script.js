// JavaScript DOM Assignment-3
// Name: Rizwan Ulah
// Roll No : 493961
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// Task-1   Get an Attribute Value
let image= document.getElementById("image").getAttribute("src");
console.log(image);

// ..................................................................................................


// Task-2   Change Image Source
function changePic(){

document.getElementById("change").setAttribute("src","FB_IMG_1662540963760.jpg");
}

// ..................................................................................................


// Task-3   Set Attribute to input Field
document.getElementById("inputFild").setAttribute("placeholder","Enter your name");

// ..................................................................................................

// Task-4   Remove Attribute
function removeAtt(){
    document.getElementById("disabledInput").removeAttribute("disabled");
}

// ..................................................................................................

// Task-5   Check if Attribute Exists   
let checkAttr= document.getElementById("para-3").hasAttribute("class");
console.log(checkAttr);

// ..................................................................................................

// Task-6   Get Link Destination
function changeLink(){
let link= document.getElementById("link").setAttribute("href","https://www.google.com");
}

// ..................................................................................................
// Assignment-3 is completed