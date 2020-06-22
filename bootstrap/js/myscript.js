function validacion() {
	var valor = document.placa.RadioV.value;
	if (valor == 0) {
		swal({
	        title: "No circulas viernes y sábado",
	          //text: "",
	          type: "warning",
	          //showCancelButton: true,
	          //confirmButtonColor: '#3085d6',
	          //cancelButtonColor: '#d33',
	          //confirmButtonText: 'Si, estoy seguro',
	          //cancelButtonText: "Cancelar"
	        });
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas viernes y sábado';
	} else if (valor == 1) {
		swal({title:'No circulas lunes y domingo',type:'warning'})
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas lunes y domingo';
	} else if (valor == 2) {
		swal('No circulas lunes y sábado','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas lunes y sábado';
	} else if (valor == 3) {
		swal('No circulas martes y domingo','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas martes y domingo';
	} else if (valor == 4) {
		swal('No circulas martes y sábado','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas martes y sábado';
	} else if (valor == 5) {
		swal('No circulas miércoles y domingo','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas miércoles y domingo';
	} else if (valor == 6) {
		swal('No circulas miércoles y sábado','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas miércoles y sábado';
	} else if (valor == 7) {
		swal('No circulas jueves y domingo','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas jueves y domingo';
	} else if (valor == 8) {
		swal('No circulas jueves y sábado','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas jueves y sábado';
	} else if (valor == 9) {
		swal('No circulas viernes y domingo','','warning')
		//document.getElementById('message').style.display = 'block';
		//document.getElementById('message').innerHTML = 'No circulas viernes y domingo';
	} 
	return (false);
}

function mostrar(){
	document.getElementById('message').style.display = 'block';
}

//Animate
window.onload = function () {
   $(document).ready(function() {
	$("#someElement").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);								
});
}
