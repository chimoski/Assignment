const hamburger = document.querySelector('.hamburger') ;
const navbar =document.querySelector('ul') 

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})

document.querySelectorAll('li').forEach((list)=>{
    list.addEventListener('click', ()=>{
        navbar.classList.remove('active')
        hamburger.classList.remove('active')
    })
})