function limpiarformulario (){
	document.getElementById("miForm").reset();
}
var den = function (n1,n2){
	var masa=parseFloat(document.getElementById("masa").value);
	var volumen=parseFloat(document.getElementById("volumen").value);
	densidad= masa/volumen;
	return "la densidad de tu objeto es:  " + densidad;
}