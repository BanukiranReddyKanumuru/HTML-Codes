// Initialize and add the map
 function initMap( ) {
    //Your location
 const loc = { lat: 14.451830, lng: 80.131730 };
 //Centered map on Location
 const map = new google.maps.Map(document.querySelector('.map')
 , {
    zoom: 15,
    center: loc
 });
 //The marker, positioned at location
 const marker =new google.maps.Market({ position: loc, map:
 map });
} 

// Sticky menu background
window.addEventListener('scroll', function(){
    if (this.window.scrollY > 150) {
        this.document.querySelector('#navbar').getElementsByClassName.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});