var cargarPagina = function () {
	$("#search-form").submit(filtrarContactos);
};

var filtrarContactos = function (e) {
	e.preventDefault();
	var filtro = $("#search").val().toLowerCase();
	var $contactos = $(".name");
	console.log($contactos);
	$contactos.each(function (indice, elemento) {
		var nombreContacto = $(elemento).text().toLowerCase();
		var $contacto = $(this).parents(".contact");
		if (nombreContacto.indexOf(filtro) >= 0) {
			$contacto.show();
			console.log(nombreContacto);
		} else {
			$contacto.hide();
		}
	});
};

$(document).ready(cargarPagina);









