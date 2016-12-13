// scherm linken
var fs = document.getElementById("screen");
//maximaal ingevoerde cijfers
function maxchar () {
	var max = fs.value;
	var s = max.length;
	
	if (s>16) {
		fs.value = max.slice(0,16);
		alert("maximum bereikt");
	}
}

//getallen tonen op display
function waarde(h){
	fs.value += h;
}

//refreshe
function empty(){ 
  fs.value='';
}

//oparator plus tonen op display en tussen stap uitrekenen.
function plus(p){
	fs.value += p;
	var plus = fs.value.indexOf("+");

}

function calc(){
	//optellen
 	var plus = fs.value.indexOf("+");

 	//aftrekken
 	var min = fs.value.indexOf("-");

 	//vermenigvuldigen
 	var x = fs.value.indexOf("*");

 	//delen
 	var delen = fs.value.indexOf("/");

//getallen bij elkaar optellen
if (plus > 0) {
	var nrs = fs.value.split("+");
	fs.value = eval(fs.value) + "";
	}

//getallen van elkaar aftrekken
if (min>0) {
	var nrs = fs.value.split("-");	
	fs.value = eval(fs.value) + "";
	}
//getallen met elkaar vermeniguldigen
if (x>0) {
	var nrs = fs.value.split("*");
	fs.value = eval(fs.value) + "";
	}
//getallen met elkaar delen
if (delen>0) {
	var nrs = fs.value.split("/");
	fs.value = eval(fs.value) + "";	}


}


//uitkomst berekenen
function uitkomst(){
	//optellen
 	var plus = fs.value.indexOf("+");

 	//aftrekken
 	var min = fs.value.indexOf("-");

 	//vermenigvuldigen
 	var x = fs.value.indexOf("*");

 	//delen
 	var delen = fs.value.indexOf("/");

//getallen bij elkaar optellen
if (plus > 0) {
	var nrs = fs.value.split("+");
	fs.value = eval(fs.value) + "";
	}

//getallen van elkaar aftrekken
if (min>0) {
	var nrs = fs.value.split("-");	
	fs.value = eval(fs.value) + "";
	}
//getallen met elkaar vermeniguldigen
if (x>0) {
	var nrs = fs.value.split("*");
	fs.value = eval(fs.value) + "";
	}
//getallen met elkaar delen
if (delen>0) {
	var nrs = fs.value.split("/");
	fs.value = eval(fs.value) + "";	}
}








