	/*function puntoMiles(x) 
	{
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}*/

	function cargaValores()
	{
		//ARRAY COMPLETO = json.query.results
		//ARTISTA = console.log('Artista : ', arr[0].div[1].div[0].content);
	    //LUGAR = console.log('Lugar : ', arr[0].div[1].div[1].content);
		//DIA EVENTO = console.log('Dia : ', arr[0].div[0].div.div[0].content);
    	//MES EVENTO = console.log('Mes : ', arr[0].div[0].div.div[1].content);

		$.getJSON( "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.agendamusical.cl%2Fconciertos%2F%22%20and%20xpath%3D'%2F%2F*%5B%40id%3D%22archive-wrapper%22%5D%2Ful%2Fdiv%2Fdiv'%20&format=json&diagnostics=true&callback=", function(json) 
		{
			var output = '';
			var arr = $.map(json.query.results, function(el) { return el; })
			for (var i = 0; i < arr.length; i++) 
			{
				var artista = arr[i].div[1].div[0].content;
				var lugar = arr[i].div[1].div[1].content;
				var dia = arr[i].div[0].div.div[0].content;
				var mes = arr[i].div[0].div.div[1].content;

				output += "<li><a href='#'>" + 
                     "<img src=''>" +
                     "<p id='DIA'>" + dia + "</p>" +
                     "<p id='MES'>" + mes + "</p>" +
                     "<h2>" + artista + "</h2>" +
                     "<p>" + lugar + "</p></a>" +
                 "</li>"
				/*console.log('Artista : ', arr[i].div[1].div[0].content);
				console.log('Lugar : ', arr[i].div[1].div[1].content);
    			console.log('Dia : ', arr[i].div[0].div.div[0].content);
    			console.log('Mes : ', arr[i].div[0].div.div[1].content);*/
    			    		}
    		$('#Conciertos').append(output).listview('refresh');
		});
	}

	$(document).ready(function ()
	{
		var valoresAux = cargaValores();
        $('#actualizar').click( function() 
        {
        	cargaValores();
        	alert('Actualizado!');
        });
    });