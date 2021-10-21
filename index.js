
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
  console.log(`random number: ${foodRandom}`);
  let pic = `<img src="${foodPictureImagesNew[foodRandom]['url']}" />`; 
  console.log(`img url: ${foodPictureImagesNew[foodRandom]['url']}`);
  // send img src string to the html by class name that is controlled by the template literal value attached to i (+1 so it starts from 1 not 0)
    let pictures = document.getElementsByClassName('pictures')[0];
 let html = `<div class="pic-img-${i}">
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


// trying to get the recipe page to populate with the details of each recipe

// var recipeChosen = "Japanese";

// sessionStorage['recipe-chosen'] = recipeChosen;

// var readValue = sessionStorage['recipe-chosen'];
// console.log(readValue);




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
  console.log("reset");
  numberValue.value = "0";
}
console.log('bonjour');



// This loops through all the .add-buttons and turns them blue - i tried to include it in the function above but it turns them
// all blue instead of the one clicked because they are all the same thing duplicated so it wont work

// let addButton = document.getElementsByClassName("add-button");
// for (let i = 0; i<addButton.length; i++) {
//   addButton[i].style.backgroundColor = 'skyblue';
// }
// console.log(addButton);

