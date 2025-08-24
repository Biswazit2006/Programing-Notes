document.querySelector('h1').innerText="Subscribe"; 

const box = document.querySelector(".box")
box.style.backgroundColor = "red";
box.style.width = '100px';
box.style.height= '100px';

document.getElementById('box').style.backgroundColor="blue";

const menuIteam =document.querySelectorAll('a');
// menuIteam[0].style.color = "red";

menuIteam.forEach(function(i){
    i.style.color="red"
});

const customClass = document.getElementsByClassName('li');
const convertClass = Array.from(customClass)
for(let i=0;i<customClass.length;i++){
    console.log(customClass[i]);
}

customClass.length

