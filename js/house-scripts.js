var name = getUrlParameter('name');
var pictures = houses[name].pictures;

$(document).ready(function() {
	document.title = capitalizeFirstLetter(name) + ' Residence';
	buildHouseInfo();
	buildGallery();
	$(window).load(function(){
		$('#lightgallery').lightGallery({
			preload: 2
		});
	});
});

function buildHouseInfo(){
	//header info
	var dir = 'images/' + name;
	$('.house-title').append(capitalizeFirstLetter(name) + ' Residence');
	$('.house-text-info').append(buildInfoString());
	$('.house-img').append('<img src="' + dir + '/main.jpg" title="' + capitalizeFirstLetter(name) + ' Residence" alt="' + capitalizeFirstLetter(name) + ' Residence">');
}

function buildInfoString(){
	var html = '<ul class="info-list">';
	html +='<li>Square Feet: ' + houses[name].sqft + '</li>';
	html += '<li>Property Type: ' + houses[name].prop_type + '</li>';
	html += '<li>Bedrooms: ' + houses[name].bdr + '</li>';
	html += '<li>Bathrooms: ' + houses[name].bath + '</li>';
	html += '<li>Total Rooms: ' + houses[name].tot_rooms + '</li>';
	html += '<li>Year Completed: ' + houses[name].year + '</li>';
	html += '<li>Siding: ' + houses[name].side + '</li>';
	html += '<li>Garage Square Feet: ' + houses[name].gar + '</li>';
	html += '<li>Heating: ' + houses[name].heat + '</li>';
	html += '<li>Air Conditioning: ' + houses[name].ac + '</li>';
	html += '</ul>';
	return html;
}

function buildGallery(){
	var dir = 'images/' + name;
	$('#lightgallery').append('<li data-src="' + dir + '/main-big.jpg"><div class="add-relative"><img src="' + dir + '/main.jpg" alt="' + capitalizeFirstLetter(name) + ' Residence Main">><span class="overlay"><span><i class="fa fa-search"></i></span></span></div></li>');
	for(i = 1; i <= pictures; i++) {
		$('#lightgallery').append('<li data-src="' + dir + '/pic-' + i + '-big.jpg"><div class="add-relative"><img src="' + dir + '/pic-' + i + '.jpg" alt="' + capitalizeFirstLetter(name) + ' Residence ' + i + '"><span class="overlay"><span><i class="fa fa-search"></i></span></span></div></li>');
	}
	
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
			if(sParameterName[1] === undefined || sParameterName[1] === ''){
				window.location.replace('index.html');
			}
            return  sParameterName[1];
        }
		else{
			window.location.replace('index.html');
		}
    }
}