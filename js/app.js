var contactos = [
	{
		"nombre": "Iván Medina",
		"numero": "+51986161136",
		"foto": "http://via.placeholder.com/200x200"
	},
	{
		"nombre": "Juan Perez",
		"numero": "+51986161136",
		"foto": "http://via.placeholder.com/200x200"
	},
	{
		"nombre": "John Doe",
		"numero": "+51986161136",
		"foto": "http://via.placeholder.com/200x200"
	},
	{
		"nombre": "Jose Guerrero",
		"numero": "+51986161136",
		"foto": "http://via.placeholder.com/200x200"
	},
	{
		"nombre": "Claudio Pizarro",
		"numero": "+51986161136",
		"foto": "http://via.placeholder.com/200x200"
	},
	{
		"nombre": "Juan Vargas",
		"numero": "+51986161136",
		"foto": "http://via.placeholder.com/200x200"
	}
];

var plantillaContacto = '<article class="row contact">' +
        '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
          '<div class="row valign-wrapper">' +
            '<div class="col s3">' +
              '<img src="__foto__" alt="Contact" class="circle responsive-img">' +
            '</div>' +
            '<div class="col s9">' +
            	'<h5 class="name">__nombre__</h5>' +
              '<span class="black-text">' +
                'Phone: __numero__' +
              '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
	'</article>';

var cargarPagina = function () {
	$("#search-form").submit(filtrarContactos);
};

var filtrarContactos = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var contactosFiltrados = contactos.filter(function (contacto) {
		return contacto.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarContactos(contactosFiltrados);
};

var mostrarContactos = function (contactos) {
	var plantillaFinal = "";
	contactos.forEach(function (contacto) {
		plantillaFinal += plantillaContacto.replace("__nombre__", contacto.nombre)
			.replace("__numero__", contacto.numero)
			.replace("__foto__", contacto.foto);
	});
	$(".contacts").html(plantillaFinal);
};

$(document).ready(cargarPagina);









