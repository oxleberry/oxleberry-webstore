
/* VARIABLES ========================================= */
var homelinkEl = document.getElementsByTagName('a')[0];
var storeLinksEls = document.getElementsByClassName('store-link');
var storeContainerEl = document.getElementById('store-container');
var divEl = document.createElement('div');

/* EVENTS ========================================= */

// show webstore images, when clicked on a link
for (var i = 0; i < storeLinksEls.length; i++){
    storeLinksEls[i].addEventListener('click', function(){
        // grabs data-name from link to find the right pictures
        var linkData = this.dataset.name;
        // clears content and show new store brand
        storeContainerEl.innerHTML = "";
        storeContainerEl.className = 'show';
        divEl.className = 'container';
        var storeObj = whichBrand(linkData);
        // find images and applies to the div
        findImages(storeObj);
        storeContainerEl.appendChild(divEl);
    });
}

// determines from list of store Brand Names
function whichBrand(linkData) {
    if (linkData === 'oxle') {
        return oxleItemsObj;
    }
    else if (linkData === 'bash') {
        return bashItemsObj;
    }
    else if (linkData === 'dino') {
        return dinoItemsObj;
    }
}


// loads name, price, and img based on objects in ITEMS.js
function findImages(storeObj){
    divEl.innerHTML = "";
    for (var i = 0; i < storeObj.length; i++){
		var currentItem = storeObj[i];
        //creates containers for elements
        var divEl2 = document.createElement('div');
        divEl2.className = 'img-container';
        divEl.appendChild(divEl2);
        // creates the Name Title and Price
        var h3El = document.createElement('h3');
        var h4El = document.createElement('h4');
        h3El.textContent = currentItem.name;
        h4El.textContent = `$${currentItem.price}`;
        // finds the Images
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', currentItem.img);
        imgEl.className = 'store-img';
        // appends name, price, and image
        divEl2.appendChild(h3El);
        divEl2.appendChild(h4El);
        divEl2.appendChild(imgEl);
    }
}

// hide webstore images, when clicked back to HOME link
homelinkEl.addEventListener('click', function(){
    storeContainerEl.className = 'hide';
});
