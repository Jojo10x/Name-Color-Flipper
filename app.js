const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const jzk =["HANDSOME","CUTE","PRETTY","BEAUTIFUL","GORGEOUS","SEXY"]

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

const kzj = document.querySelector(".cute");

btn.addEventListener('click',function()
{
    let hexColor = '#';
    for(let i = 0; i<6;i++)
    {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent =hexColor;

    document.body.style.backgroundColor = hexColor;



});

btn.addEventListener('click',function(){

    let cutie = '';
    for(let i = 0;i<6;i++)
    {
        cutie = jzk[getRandomName()];
    }

    kzj.textContent = cutie;

    document.body.style.backgroundColor = cutie;

});

function getRandomName()
{
   return  Math.floor(Math.random() * jzk.length);
}


function getRandomNumber()
{
   return  Math.floor(Math.random() * hex.length);
}