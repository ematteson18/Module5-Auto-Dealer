
// inject currnet year in footers
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()


const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');

});

import {reviews } from "../data/reviews.js";
console.log(reviews); // Does this log properly?


console.log(reviews);

//create empty card
const myTarget = document.querySelector("#parent");



for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section');
    
    const myName = document.createElement('h3');
    myName.textContent = reviews[x].name;

    const myReview = document.createElement('p');
    myReview.textContent = reviews[x].text;

    const myStars = document.createElement('div');  // Create a container for the stars
    for (let i = 0; i < reviews[x].stars; i++) {  // Loop through the number of stars
        const starIndicator = document.createElement('img');
        starIndicator.src = "../images/star-solid.svg";  // Path to your star SVG
        starIndicator.alt = "Star rating";
        starIndicator.style.width = "20px";  // Optional: size the stars
        starIndicator.style.height = "20px";  // Optional: size the stars
        myStars.appendChild(starIndicator);  // Append each star to the container
    }

    mySection.appendChild(myName);
    mySection.appendChild(myReview);
    mySection.appendChild(myStars);  // Append the stars container to the section

    myTarget.appendChild(mySection);  // Append the section to the target container
}
