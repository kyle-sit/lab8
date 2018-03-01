function initMap() {
	//create center marker for ucsd
	var ucsd_ltlng = {lat: 32.878802, lng: -117.235912};

	//new map object
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: 'UCSD'
	});
}