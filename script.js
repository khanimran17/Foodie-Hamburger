const hamMenu = document.querySelector('.ham-menu');
const navArea = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link')

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navArea.classList.toggle('active');
});

navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        hamMenu.classList.remove('active');
        navArea.classList.remove('active');
    })
})
