//Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer","Problem Solver", "UI/UX Designer","Critical Thinker","Web Developer"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Problem Solver", "UI/UX Designer","Critical Thinker", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
});


//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);



//darkmode
var icon = document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="./Dark Mode/moon.png"
    }else{
        icon.src="./Dark Mode/sun.png"
    }

}

//view more
document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.querySelector('.gallery');
    var viewMore = document.getElementById('viewMore');
    var viewLess = document.getElementById('viewLess');

    viewMore.addEventListener('click', function () {
        var galleryItems = gallery.querySelectorAll('li');
        galleryItems.forEach(function (item, index) {
            if (index >= 3) {
                item.style.display = 'block';
            }
        });
        viewMore.style.display = 'none';
        viewLess.style.display = 'block';
    });

    viewLess.addEventListener('click', function () {
        var galleryItems = gallery.querySelectorAll('li');
        galleryItems.forEach(function (item, index) {
            if (index >= 3) {
                item.style.display = 'none';
            }
        });
        viewMore.style.display = 'block';
        viewLess.style.display = 'none';
    });
});






