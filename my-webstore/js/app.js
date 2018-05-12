
/* VARIABLES ========================================= */
var homelinkEl = document.getElementsByTagName('a')[0];
var storeLinksEls = document.getElementsByClassName('store-link');
var storeContainerEl = document.getElementById('store-container');


/* EVENTS ========================================= */

// show webstore images, when clicked on a link
for (var i = 0; i < storeLinksEls.length; i++){

    storeLinksEls[i].addEventListener('click', function(){
        // grabs data-name from link to find the right picture
        var linkData = this.dataset.name;
        // console.log(linkData);
        storeContainerEl.innerHTML = "";
        storeContainerEl.className = 'show';
        findImages(linkData);
    });
}

// loads images based on the linkData
function findImages(linkData){
    for (var i = 0; i < 5; i++){
        var itemName = `images/${linkData}_${i}.png`;
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', itemName);
        imgEl.className = 'store-img';
        storeContainerEl.appendChild(imgEl);
    }
}

// hide webstore images, when clicked back to HOME link
homelinkEl.addEventListener('click', function(){
    storeContainerEl.className = 'hide';
});
