
// random pics showing in grid on each load

const foodPictureImagesNew = [
  {'name': 'Beef Rendang','url':'images/dishes/beef-rendang.jpg'},{'name': 'Blackened Beef','url':'images/dishes/beef-with-green-tomato.jpg'},{'name': 'Black Pudding','url':'images/dishes/black-pudding.jpg'},
  {'name': 'Bruscetta','url':'images/dishes/bruscetta.jpg'},{'name': 'Cheese Noodles','url':'images/dishes/cheese-noodles.jpg'},{'name': 'Chilli Ribs','url':'images/dishes/chilli-ribs.jpg'},
  {'name': 'Clam Veloute','url':'images/dishes/clam-veloute.jpg'},{'name': 'Cumberland Sauce','url':'images/dishes/cumberland-sauce.jpg'},{'name': 'Dauphinoise Potatoes','url':'images/dishes/dauphinoise.jpg'},
  {'name': 'Dosas','url':'images/dishes/dosa.jpg'},{'name': 'Dragon Rolls','url':'images/dishes/dragon-rolls.jpg'},{'name': 'Eggs Benedict','url':'images/dishes/eggs-benedict.jpg'},
  {'name': 'Garlic Prawns','url':'images/dishes/garlic-prawns.jpg'},{'name': 'Gochujang Eggs','url':'images/dishes/gochujang-eggs.jpg'},{'name': 'Guacamole','url':'images/dishes/guacamole.jpg'},
  {'name': 'Jerk Pork','url':'images/dishes/jerk-pork.jpg'},{'name': 'Beef Jerky','url':'images/dishes/jerky.jpg'},{'name': 'Korean Pork','url':'images/dishes/korean-pork.jpg'},
  {'name': 'Lamb Kebabs','url':'images/dishes/lamb-kebabs.jpg'},{'name': 'Lamb Ramen','url':'images/dishes/lamb-ramen.jpg'},{'name': 'Lemon Risotto','url':'images/dishes/lemon-risotto.jpg'},
  {'name': 'Jjajangmen','url':'images/dishes/looking-at-noodles.jpg'},{'name': 'Meatballs','url':'images/dishes/meatballs.jpg'},{'name': 'Mushroom Omelette','url':'images/dishes/mushroom-omelette.jpg'},
  {'name': 'Mushroom Pizza','url':'images/dishes/mushroom-pizza.jpg'},{'name': 'Lime Pickle','url':'images/dishes/nimbu-achar.jpg'},{'name': 'Oyster Fritters','url':'images/dishes/oyster-fritters.jpg'},
  {'name': 'Oysters Rockefella','url':'images/dishes/oysters-rockefella.jpg'},{'name': 'Padron Peppers','url':'images/dishes/padron-peppers.jpg'},{'name': 'Papaya Salad','url':'images/dishes/papaya-salad.jpg'},
  {'name': 'Pea and Mint Soup','url':'images/dishes/pea-and-mint-soup.jpg'},{'name': 'Pho','url':'images/dishes/pho.jpg'},{'name': 'Poke Bowl','url':'images/dishes/poke-bowl.jpg'},
  {'name': 'Pork Belly Ramen','url':'images/dishes/pork-belly-ramen.jpg'},{'name': 'Pork Chops','url':'images/dishes/pork-chops.jpg'},{'name': 'Ramen Eggs','url':'images/dishes/ramen-eggs.jpg'},
  {'name': 'Rice and Egg','url':'images/dishes/rice-and-egg.jpg'},{'name': 'Homemade Salami','url':'images/dishes/salami.jpg'},{'name': 'Fiery Scotch Eggs','url':'images/dishes/scotch-eggs.jpg'},
  {'name': 'Shoryu Ramen','url':'images/dishes/shoryu-ramen.jpg'  },{'name': 'Shrimp Tacos','url':'images/dishes/shrimp-tacos.jpg'},{'name': 'Homemade Ramen Noodles','url':'images/dishes/smiley-noodles.jpg'},
  {'name': 'Home-smoked Mackerel','url':'images/dishes/smoked-mackerel.jpg'},{'name': 'Spaghetti and Pesto','url':'images/dishes/spaghetti.jpg'},{'name': 'Proper Steak','url':'images/dishes/steak.jpg'},
  {'name': 'Tonkotsu Ramen','url':'images/dishes/tonkotsu-ramen.jpg'},{'name': 'Turkish Salad','url':'images/dishes/turkish-salad.jpg'},{'name': 'Vegan Con Carne','url':'images/dishes/vegan-con-carne.jpg'},
];

  // populate pic variable with a random image from the array
  function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper );
  }
// create a for loop to loop over contents of foodPictureImages array but only 24 times as there are 18 children in the css grid and then another 6 allows the bottom of the
// grid to have a consistent line of images
for (let i = 0; i<24; i++){
  console.log(`index: ${i}`);
//  make pic variable be one of the array items based on a random index number created by getRandomNumber with an argument of the length of the array +1 
// (random number with the highest number being the length of the array)
  let foodRandom = getRandomNumber(foodPictureImagesNew.length);
 
  let pic = `<img src="${foodPictureImagesNew[foodRandom]['url']}" />`; 

  
  // send img src string to the html by class name that is controlled by the template literal value attached to i (+1 so it starts from 1 not 0)
    let pictures = document.getElementsByClassName('pictures')[0];
 let html = `<div class="pic-img-${i+1}">
                <a href = "recipe.html" class="picture-link">
                  <img
                    src="${foodPictureImagesNew[foodRandom]['url']}"
                    name="big-pic-one"
                    alt="${foodPictureImagesNew[foodRandom]['name']}"
                    class="my-fat-picture"
                    title="${foodPictureImagesNew[foodRandom]['name']}"
                  />
                </a>
                <p class="text-over-images">${foodPictureImagesNew[foodRandom]['name']}</p>
                  <button class="add-button" onclick="buttonClick()" title ="Add to cookbook">
                  <div id="add-vertical-background"></div>
                  <div id="add-horizontal-background"></div>
                  <div id="add-vertical"></div>
                  <div id="add-horizontal"></div>
                  </button>
              </div>`;
pictures.innerHTML += html;
    console.log(`pic-img-${i+1}`);
    console.log(pic);
}

// when button is clicked  -- takes away the s from pages and makes the page counter increase with each click.
let numberValue = document.getElementById("number-box");
let pagesBox = document.getElementById("pages-word");

numberValue.value = "0";

function buttonClick() {
  if (numberValue.value == "0") {
    numberValue.value = "1";
    pagesBox.textContent = "page";
  } else {
    numberValue.value++;
    pagesBox.textContent = "pages";
  }
}
// when clicked reset the numberValue.value to zero
function resetButton() {
  numberValue.value = "0";
}

// Toggling menu bar off on smaller viewports
const navSlide = ()=>{
const menuButton = document.getElementById('menu-button');
const navList = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar h1');

// event listener on click to slide in the navbar
menuButton.addEventListener('click', ()=>{
  navList.style.zIndex = '1';
  navList.classList.toggle('navbar-active');

// animating the links to fade in and slide in to center with a delay between each
  navLinks.forEach((link,index) =>{
    if(link.style.animation){
      link.style.animation = '';
      // setting the z-index of the navbar as being behind all content a second after toggling off so you dont see it slide on/off when switching display sizes
      setTimeout(function (){
        navList.style.zIndex = '-1';
      }, 1000);

    }else{
      link.style.animation = `navH1Fade 0.5s ease forwards ${index / 5 + 0.3}s`;
    }
  });
});
}
// invoke above function on loading
navSlide();



