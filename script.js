// fetch('https://cat-fact.herokuapp.com/facts')
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     console.log(data[1].text);
//     // console.log(data[0])
//     // console.log(data[0].type)
// })

let URL='https://cat-fact.herokuapp.com/facts';
let button=document.querySelector('#btn');
let fact=document.querySelector('#fact');
let backgrounds = [
    'one.jpg',
    'two.jpg',
    'three.jpg',
    'four.jpg',
    'five.jpg',
    'six.jpg',
    'seven.jpg',
    'eigth.jpg'
];
// let backgroundColors = [
//     '#FFCDD2', // light red
//     '#F8BBD0', // pink
//     '#E1BEE7', // purple
//     '#D1C4E9', // deep purple
//     '#C5CAE9', // indigo
//     '#BBDEFB', // blue
//     '#B3E5FC', // light blue
//     '#B2EBF2', // cyan
//     '#B2DFDB', // teal
//     '#C8E6C9', // green
//     '#DCEDC8', // light green
//     '#F0F4C3', // lime
//     '#FFF9C4', // yellow
//     '#FFECB3', // amber
//     '#FFE0B2', // orange
//     '#FFCCBC'  // deep orange
// ];
// Function to generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


async function getFacts(){
    let response=await fetch(URL);
    let data=await response.json();
    let randomIndex = Math.floor(Math.random() * data.length);
    fact.innerHTML=data[randomIndex].text;
    // let randomColor = getRandomColor();
    // document.body.style.backgroundColor = randomColor;

  
    let backgroundIndex = Math.floor(Math.random() * backgrounds.length);
    document.querySelector('.background-overlay').style.opacity = 1; // Make overlay visible
    setTimeout(() => {
        document.querySelector('.background-overlay').style.backgroundImage = `url(${backgrounds[backgroundIndex]})`;
    }, 500);
    // document.body.style.backgroundImage = `url(${backgrounds[backgroundIndex]})`;
}

button.addEventListener('click',getFacts);
