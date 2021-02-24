const humberger = document.querySelector('.humbergerMenu');
const link = document.querySelector('.link');
const link_li = document.querySelector('.link li');

humberger.addEventListener('click',() =>{
    link.classList.toggle('open');
})

let  counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
        counter = 1;
        }
    },5000);
