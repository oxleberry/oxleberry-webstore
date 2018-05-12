
/* VARIABLES ========================================= */
var homeEl = document.getElementsByTagName('a')[0];
var storeContainerEl = document.getElementById('store-container');
var linksEl = document.getElementsByClassName('link');


/* EVENTS ========================================= */


// show webstore images, when clicked on a link
for (var i = 0; i < linksEl.length; i++){
    linksEl[i].addEventListener('click', function(){
        storeContainerEl.className = 'show';
    });
}

// hide webstore images, when clicked back to HOME link
homeEl.addEventListener('click', function(){
    storeContainerEl.className = 'hide';
});
