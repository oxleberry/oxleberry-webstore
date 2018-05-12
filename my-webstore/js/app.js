
/* VARIABLES ========================================= */
var homelinkEl = document.getElementsByTagName('a')[0];
var storeContainerEl = document.getElementById('store-container');
var storeLinksEls = document.getElementsByClassName('store-link');
var storeImgsEls = document.getElementsByClassName('store-img');


/* EVENTS ========================================= */

// show webstore images, when clicked on a link
for (var i = 0; i < storeLinksEls.length; i++){
    storeLinksEls[i].addEventListener('click', function(){
        storeContainerEl.className = 'show';
        findImages ();
    });
}


// hide webstore images, when clicked back to HOME link
homelinkEl.addEventListener('click', function(){
    storeContainerEl.className = 'hide';
});


// loads images
function findImages (){
    for (var i = 0; i < storeImgsEls.length; i++){
        var itemName = `images/oxle_${i}.jpg`;
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', itemName);
        storeImgsEls[i].appendChild(imgEl);
        console.log('hi');
    }
}
