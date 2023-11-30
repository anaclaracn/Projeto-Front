//----------------inserindo o mapa------------------//

function inserirMapa(){
    var coordenadasUFLA = { lat: -21.23144, lng: -44.993119 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: coordenadasUFLA
    });
    var marker = new google.maps.Marker({
        position: coordenadasUFLA,
        map: map
    });
}