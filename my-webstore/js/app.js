
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

// loads name, price, and img based on data in items.js file
function findImages(storeObj){
    divEl.innerHTML = "";
    for (var i = 0; i < storeObj.length; i++){
        var currentItem = storeObj[i];
        //creates containers for elements
        var divEl2 = document.createElement('div');
        divEl2.className = 'img-container';
        divEl.appendChild(divEl2);
        // grabs the name label and pricing
        var h3El = document.createElement('h3');
        var h4El = document.createElement('h4');
        h3El.textContent = currentItem.name;
        h4El.textContent = `$${currentItem.price}`;
        // finds the images paths
        var imgEl = document.createElement('img');
        imgEl.setAttribute('src', currentItem.img);
        imgEl.className = 'store-img';
        // appends name, price, and image
        divEl2.appendChild(h3El);
        divEl2.appendChild(h4El);
        divEl2.appendChild(imgEl);

        // event lister to check if an image is clicked to add to shopping list
        imgEl.addEventListener('click', addToList);
        imgEl.dataset.number = currentItem.price;
        imgEl.dataset.label = currentItem.name;
    }
}

// hide webstore images, when clicked back to HOME link
homelinkEl.addEventListener('click', function(){
    storeContainerEl.className = 'hide';
});

/* SHOPPING CART ===================================== */

function addToList (){
    // grabs and creates elements
    var ulEl = document.querySelector('ul');
    var liEl = document.createElement('li');
    var pLabelEl = document.createElement('p');
    var pPriceEl = document.createElement('p');
    pPriceEl.className = 'listPrice';
    // grabs name and price from dataset
    var listLabel = this.dataset.label;
    var listPrice = this.dataset.number;
    pLabelEl.textContent = listLabel;
    pPriceEl.textContent = `$${listPrice}`;
    // appends items
    liEl.appendChild(pLabelEl);
    liEl.appendChild(pPriceEl);
    ulEl.appendChild(liEl);
}
