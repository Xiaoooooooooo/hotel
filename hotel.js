////////////////////////////////////////////////////////////////////////Global Variables////////////////////////////////////////////////////////////////////////

var room1 = 0;
var room2 = 0;
var room3 = 0;
var room4 = 0;
var room5 = 0;
var room6 = 0;

var lock1 = false;
var lock2 = false;
var lock3 = false;
var lock4 = false;
var lock5 = false;
var lock6 = false;

var newList1;
var newList2;
var newList3;
var newList4;
var newList5;
var newList6;

var posAll = document.getElementById("all");
var timeAll = document.getElementById("boxTime");
///////////////////////////////////////////////////////////////////////////LOCK ROOMS///////////////////////////////////////////////////////////////////////////
function Lock1() {
  if (lock1 === false) {
    lock1 = true;
    document.getElementById("lock1html").innerHTML = "LOCKED";
  }
  else {
    lock1 = false;
    document.getElementById("lock1html").innerHTML = "Unlock";
  }
}

function Lock2() {
  if (lock2 === false) {
    lock2 = true;
    document.getElementById("lock2html").innerHTML = "LOCKED";
  }
  else {
    lock2 = false;
    document.getElementById("lock2html").innerHTML = "Unlock";
  }
}

function Lock3() {
  if (lock3 === false) {
    lock3 = true;
    document.getElementById("lock3html").innerHTML = "LOCKED";
  }
  else {
    lock3 = false;
    document.getElementById("lock3html").innerHTML = "Unlock";
  }
}

function Lock4() {
  if (lock4 === false) {
    lock4 = true;
    document.getElementById("lock4html").innerHTML = "LOCKED";
  }
  else {
    lock4 = false;
    document.getElementById("lock4html").innerHTML = "Unlock";
  }
}

function Lock5() {
  if (lock5 === false) {
    lock5 = true;
    document.getElementById("lock5html").innerHTML = "LOCKED";
  }
  else {
    lock5 = false;
    document.getElementById("lock5html").innerHTML = "Unlock";
  }
}

function Lock6() {
  if (lock6 === false) {
    lock6 = true;
    document.getElementById("lock6html").innerHTML = "LOCKED";
  }
  else {
    lock6 = false;
    document.getElementById("lock6html").innerHTML = "Unlock";
  }
}

////////////////////////////////////////////////////////////////Add People into Rooms///////////////////////////////////////////////////////////////////////////

function Room1add() { //Room1
  if (room1 < 4 && lock1 === false) {
    var newList1 = document.createElement("li");
    var TextInput1 = document.getElementById("Room1").value;
    if (TextInput1.length == 0 || TextInput1.trim() === "") {
      return;
    }
    room1++;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() ;
    var newText1 = document.createTextNode(TextInput1 + " " + time);
    newList1.appendChild(newText1);
    var position1 = document.getElementById("one");
    position1.appendChild(newList1);
    var listAll = document.createElement("li");
    listAll.appendChild(document.createTextNode(TextInput1 + " " + time));
    posAll.appendChild(listAll);
    TextInput1 = document.getElementById("Room1").value = "";
    TimeAll
    newList1.onclick = function () {
    this.parentElement.removeChild(this);
    room1--;
    };
    
  }
  else {
    return;
  }
}

//Room 2\\

function Room2add() { //Room2
  if (room2 < 4 && lock2 === false) {
    var newList2 = document.createElement("li");
    var TextInput2 = document.getElementById("Room2").value;
    if (TextInput2.length == 0 || TextInput2.trim() === "") {
      return;
    }
    room2++;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() ;
    var newText2 = document.createTextNode(TextInput2 + " " + time);
    newList2.appendChild(newText2);
    var position2 = document.getElementById("two");
    position2.appendChild(newList2);
    var listAll2 = document.createElement("li");
    listAll2.appendChild(document.createTextNode(TextInput2 + " " + time));
    posAll.appendChild(listAll2);
    TextInput2 = document.getElementById("Room2").value = "";
    newList2.onclick = function () {
    this.parentElement.removeChild(this);
    room2--;
    };
  }
  else {
    return;
  }
}

//Room 3\\

function Room3add() { //Room3
  if (room3 < 4 && lock3 === false) {
    var newList3 = document.createElement("li");
    var TextInput3 = document.getElementById("Room3").value;
    if (TextInput3.length == 0 || TextInput1.trim() === "") {
      return;
    }
    room3++
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() ;
    var newText3 = document.createTextNode(TextInput3 + " " + time);
    newList3.appendChild(newText3);
    var position3 = document.getElementById("three");
    position3.appendChild(newList3);
    var listAll3 = document.createElement("li");
    listAll3.appendChild(document.createTextNode(TextInput3 + " " + time));
    posAll.appendChild(listAll3);
    TextInput3 = document.getElementById("Room3").value = "";
    newList3.onclick = function () {
    this.parentElement.removeChild(this);
    room3--;
    };
  }
  else {
    return;
  }
}

//Room 4\\

function Room4add() { //Room4
  if (room4 < 4 && lock4 === false) {
    var newList4 = document.createElement("li");
    var TextInput4 = document.getElementById("Room4").value;
    if (TextInput4.length == 0 || TextInput1.trim() === "") {
      return;
    }
    room4++
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() ;
    var newText4 = document.createTextNode(TextInput4 + " " + time);
    newList4.appendChild(newText4);
    var position4 = document.getElementById("four");
    position4.appendChild(newList4);
    var listAll4 = document.createElement("li");
    listAll4.appendChild(document.createTextNode(TextInput4 + " " + time));
    posAll.appendChild(listAll4);
    TextInput4 = document.getElementById("Room4").value = "";
    newList4.onclick = function () {
    this.parentElement.removeChild(this);
    room4--;
    };
  }
  else {
    return;
  }
}

//Room 5\\

function Room5add() { //Room5
  if (room5 < 4 && lock5 === false) {
    var newList5 = document.createElement("li");
    var TextInput5 = document.getElementById("Room5").value;
    if (TextInput5.length == 0 || TextInput1.trim() === "") {
      return;
    }
    room5++
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() ;
    var newText5 = document.createTextNode(TextInput5 + " " + time);
    newList5.appendChild(newText5);
    var position5 = document.getElementById("five");
    position5.appendChild(newList5);
    var listAll5 = document.createElement("li");
    listAll5.appendChild(document.createTextNode(TextInput5 + " " + time));
    posAll.appendChild(listAll5);
    TextInput5 = document.getElementById("Room5").value = "";
    newList5.onclick = function () {
    this.parentElement.removeChild(this);
    room5--;
    };
  }
  else {
    return;
  }
}

//Room 6\\

function Room6add() { //Room6
  if (room6 < 4 && lock6 === false) {
    var newList6 = document.createElement("li");
    var TextInput6 = document.getElementById("Room6").value;
    if (TextInput6.length == 0 || TextInput1.trim() === "") {
      return;
    }
    room6++
    var today = new Date()
    var time = today.getHours() + ":" + today.getMinutes() ;
    var newText6 = document.createTextNode(TextInput6 + " " + time);
    newList6.appendChild(newText6);
    var position6 = document.getElementById("six");
    position6.appendChild(newList6);
    var listAll6 = document.createElement("li");
    listAll6.appendChild(document.createTextNode(TextInput6 + " " + time));
    posAll.appendChild(listAll6);
    TextInput6 = document.getElementById("Room6").value = "";
    newList6.onclick = function () {
    this.parentElement.removeChild(this);
    room6--;
    };
  }
  else {
    return;
  }
}


///////////////////////////////////////////////////////////////Clear All Functions////////////////////////////////////////////////////////////////////////////

function Clear1() {
  document.getElementById("one").innerHTML = " "
  room1 = 0
}
function Clear2() {
  document.getElementById("two").innerHTML = " "
  room2 = 0
}
function Clear3() {
  document.getElementById("three").innerHTML = " "
  room3 = 0
}
function Clear4() {
  document.getElementById("four").innerHTML = " "
  room4 = 0
}
function Clear5() {
  document.getElementById("five").innerHTML = " "
  room5 = 0
}function Clear6() {
  document.getElementById("six").innerHTML = " "
  room6 = 0
}