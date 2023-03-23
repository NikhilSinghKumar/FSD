const colors= ['green', 'blue', 'red', 'pink', 'brown'];
const btn= document.querySelector('#btn');
const color= document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber= getRandomNumber()
    document.body.style.backgroundColor= colors[randomNumber]
    color.textContent= colors[randomNumber]
    // *task - change color (under span) on click as well
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}