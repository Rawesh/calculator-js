function maxchar () {
	var fs = document.getElementById("screen");
	var max = fs.value;
	var s = max.length;
	
	if (s>16) {
		fs.value = max.slice(0,16);
		alert("maximum bereikt");
	}
}

//getallen tonen op display
function waarde(h){
	var fs = document.getElementById("screen");
	fs.value += h;
}
//array getal oparator getal oparator getal oparator
var oparator = ["getal1","plus1","getal2","plus1"];

//oparator plus tonen op display en tussen stap uitrekenen.
function plus(p){
	var fs = document.getElementById("screen");
	fs.value += p;

	var plus = fs.value.indexOf("+");
	alert(plus);
	
}

//refreshe
function empty(){ 
  var fs = document.getElementById("screen");
  fs.value='';
	
}

function uitkomst(){
	var fs = document.getElementById("screen");
	//optellen
 	var plus = fs.value.indexOf("+");

 	//aftrekken
 	var min = fs.value.indexOf("-");

 	//vermenigvuldigen
 	var x = fs.value.indexOf("*");

 	//delen
 	var delen = fs.value.indexOf("/");

//getallen bij elkaar optellen
if (plus>0) {
	var nrs = fs.value.split("+");
	fs.value = eval(fs.value) + "";
	}

//getallen van elkaar aftrekken
if (min>0) {
	var nrs = fs.value.split("-");	
	fs.value = eval(fs.value) + "";
	}

if (x>0) {
	var nrs = fs.value.split("*");
	fs.value = eval(fs.value) + "";
	}

if (delen>0) {
	var nrs = fs.value.split("/");
	fs.value = eval(fs.value) + "";	}
}





